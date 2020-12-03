import {createNewProj, addNewTask, task, projects} from './logic.js';
import addListener from "./index.js";

const content = document.querySelector("#content");
const header = document.createElement("div");
header.id = "header";

function addDOMItem(parent,childId=null,childClass=null,text=null) {
    const childItem = document.createElement("div");
    childItem.id = childId;
    childItem.className = childClass;
    childItem.innerText = text;
    parent.appendChild(childItem);
    return childItem;
};

function updateTasks() {
    const keys = Object.keys(projects);
    for (let i = 0;i < keys.length;i++) {
        const tempProject = document.querySelector(`#${keys[i]}`);
        const listTasks = projects[keys[i]];
        let displayedTasks = tempProject.childNodes;
        displayedTasks = Array.from(displayedTasks);
        displayedTasks = displayedTasks.slice(2);
        if (listTasks.length > displayedTasks.length) {
            const tempTask = addDOMItem(tempProject,"","task",listTasks[listTasks.length-1].title);
        };
    };
};

function renderTasks(key,project) {
    const tempProject = projects[key];
    for (let i = 0;i < tempProject.length;i++) {
        const tempTask = addDOMItem(project,"","task",tempProject[i]);
        addListener(tempTask, )
    };
};

function renderProjects() {
    const keys = Object.keys(projects);
    function renderTasks(key,project) {
        const tasks = projects[key];
        for (let i =0;i < tasks.length;i++) {
            addDOMItem(project,"","task",tasks[i]);
        };
    };
    //iterates through list of Projects
    for (let i = 0;i < keys.length;i++) {
        const tempProject = addDOMItem(content,keys[i],"project")
        addDOMItem(tempProject,"","projectTitle",keys[i]);
        addDOMItem(tempProject,'add'+keys[i]+"Btn","addTaskBtn","Add New Task");
        renderTasks(tempProject.id,tempProject);
    };
};

function renderHeader() {
    addDOMItem(content,'addProjectBtn',"","Add New Project");
};

function updateProjects() {
    const keys = Object.keys(projects);
    const lastIndex = keys.length-1;
    let displayedProjects = document.querySelectorAll(".project");
    if (displayedProjects.length < keys.length) {
        const tempProject = addDOMItem(content,keys[lastIndex],"project")
        addDOMItem(tempProject,"","projectTitle",keys[lastIndex]);
        const addTaskBtn = addDOMItem(tempProject,'add'+keys[lastIndex]+"Btn","addTaskBtn","Add New Task");
        addListener(addTaskBtn, addNewTask);
        addListener(addTaskBtn, updateTasks);
        renderTasks(tempProject.id,tempProject);
    };
};

function renderTaskForms() {
    let projectDomItems = document.querySelectorAll(".project");
        projectDomItems = Array.from(projectDomItems);
    let taskFormDomItems = document.querySelectorAll(".task-form");
        taskFormDomItems = Array.from(taskFormDomItems);
    function labelOf(item) {
        const label = document.createElement("label");
        label.innerText = item.id.replace("-"," ");
        label.class = "label";
        label.htmlFor = item.id;
        return label
    }
    if (projectDomItems.length > taskFormDomItems.length) {
        const dif = projectDomItems.length - taskFormDomItems.length;
        for (let i = (projectDomItems.length - dif);i<projectDomItems.length;i++) {
            const project = projectDomItems[i]
            const taskForm = document.createElement("form");
            taskForm.className = "task-form";
            //form inputs
            function titleObj() {
                const div = document.createElement("div");
                const title = document.createElement("input");
                title.type = "text";
                title.id = "task-title"
                const titleLabel = labelOf(title);
                div.appendChild(titleLabel);
                div.appendChild(title);
                return div;
            };
            function descriptionObj() {
                const div = document.createElement("div");
                const description = document.createElement("input");
                description.type = "text";
                description.id = "description";
                const descriptionLabel = labelOf(description);
                div.appendChild(descriptionLabel);
                div.appendChild(description);
                return div;
            }
            function dateObj() {
                function today() {
                    const date = new Date;
                    const year = String(date.getFullYear()).padStart(4,0);
                    const month = String(date.getMonth()).padStart(2,0);
                    const day = String(date.getDay()).padStart(2,0);
                    return (year + "-" + month + "-" + day)
                };
                const div = document.createElement("div");
                const date = document.createElement("input");
                date.type = "date";
                date.value = today();
                date.id = "date";
                const dateLabel = labelOf(date);
                div.appendChild(dateLabel);
                div.appendChild(date);
                return div;
            }
            function priorityObj() {
                const priority = document.createElement("div");
                const priorityLabel = document.createElement("h2");
                priorityLabel.innerText = "Priority:";
                priority.appendChild(priorityLabel);
                const priorityArr = ["high", "moderate", "low"];
                priorityArr.forEach(function(item) {
                    const temp = document.createElement("input");
                    temp.type = "radio";
                    temp.id = `${item}`;
                    temp.value = `priority-${item}`;
                    temp.name = "priority-level";
                    temp.innerText = item;
                    const tempLabel = labelOf(temp);
                    if (tempLabel.innerText === "moderate") {
                        temp.setAttribute("checked","true");
                    };
                    priority.appendChild(temp)
                    priority.appendChild(tempLabel);
                });
                return priority;
            };
            function statusObj() {
                const status = document.createElement("div");
                const statusTitle = document.createElement("h2");
                statusTitle.innerText = "Status";
                status.appendChild(statusTitle);
                const statusArr = ["not started","in progress","completed"];
                statusArr.forEach(function(val) {
                    const el = document.createElement("input");
                        el.type = "radio";
                        el.id = val.replace(" ","-");
                        el.value = val.replace(" ","-");
                        el.name = "completed-status";
                        el.innerText = val;
                    const elLabel = labelOf(el);
                    if (elLabel.innerText === "not started") {
                        el.setAttribute("checked","true");
                    };
                    status.appendChild(el);
                    status.appendChild(elLabel);
                });
                return status;
            };
            function submitObj() {
                const submit = document.createElement("input");
                submit.type = "submit";
                submit.id = "submit";
                submit.innerText = "Submit";
                return submit;
            }
            const formItems = [titleObj(), descriptionObj(), dateObj(), priorityObj(), statusObj(), submitObj()];
            formItems.forEach(function(item) {
                taskForm.appendChild(item);
            });
            project.appendChild(taskForm)
        };

    };
};

function addProjectModal() {

};

export {renderProjects, renderHeader, updateTasks, updateProjects, renderTaskForms};