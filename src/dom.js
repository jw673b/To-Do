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
        console.log(taskFormDomItems)
    if (projectDomItems.length > taskFormDomItems.length) {
        const dif = projectDomItems.length - taskFormDomItems.length;
        for (let i = (projectDomItems.length - dif);i<projectDomItems.length;i++) {
            const project = projectDomItems[i]
            const taskForm = document.createElement("form");
            taskForm.className = "task-form";
            const title = document.createElement("input");
                title.type = "text";
                title.id = "task-title";
                
            const description = document.createElement("input");
                description.type = "text";
            const date = document.createElement("div");
                date.type = "date";
            const priority = document.createElement("div");
                const priorityLabel = document.createElement("h2");
                    priorityLabel.innerText = "Priority:";
                    priority.appendChild(priorityLabel);
                const priorityArr = ["high", "moderate", "low"];
                priorityArr.forEach(function(item) {
                    const temp = document.createElement("input");
                    temp.type = "radio";
                    temp.id = `priority-${item}`;
                    temp.value = `priority-${item}`;
                    temp.name = "priority-level";
                    temp.innerText = item;
                    priority.appendChild(temp)
                    const label = document.createElement("label");
                    label.htmlFor = temp;
                    label.innerText = item;
                    priority.appendChild(label);
                });
            const completed = document.createElement("div");
                const completedLabel = document.createElement("h2");
                    completedLabel.innerText = "Status";
                    completed.appendChild(completedLabel);
                const completedArr = ["not completed","in progress","completed"];
                    completedArr.forEach(function(status) {
                    const temp = document.createElement("input");
                    temp.type = "radio";
                    temp.id = status.replace(" ","-");
                    temp.value = status.replace(" ","-");
                    temp.name = "completed-status";
                    temp.innerText = status;
                    completed.appendChild(temp);
                    const label = document.createElement("label");
                    label.htmlFor = temp;
                    label.innerText = status;
                    completed.appendChild(label);
                });
            const submit = document.createElement("input");
                submit.type = "submit";
                submit.id = "submit";
                submit.innerText = "Submit";
            const formItems = [title, description, date, priority, completed, submit];
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