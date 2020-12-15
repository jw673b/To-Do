import {createNewProj, addNewTask, task, projects, completeTask} from './logic.js';
import addListener from "./index.js";

const content = document.querySelector("#content");
const header = document.createElement("div");
header.id = "header";
const taskPropKeys = ["description","date","priority","status"];

function addDOMItem(parent,childId=null,childClass=null,text=null) {
    const childItem = document.createElement("div");
    childItem.id = childId;
    childItem.className = childClass;
    childItem.innerText = text;
    parent.appendChild(childItem);
    return childItem;
};
function renderHeader() {
    addDOMItem(content,'addProjectBtn',"","Add New Project");
};
function completedBtn() {
    const completedBtn = document.createElement("button");
    completedBtn.type = "button";
    completedBtn.className = "marked-completed";
    completedBtn.innerText = "X";
    completedBtn.addEventListener("click",completeTask);
    completedBtn.addEventListener("click",removeTask);
    return completedBtn;
}
//tasks
function renderTasks(key,project) {
    const tasks = projects[key];
    for (let i = 0;i < tasks.length;i++) {
        const task = addDOMItem(project,`${tasks[i].project}-${tasks[i].index}`,"task");
        for (let j = 0;j < 3;j++) {
            addDOMItem(task,`${tasks[i].title}-${taskPropKeys[j]}`,taskPropKeys[j],tasks[i][taskPropKeys[j]]);
        };
        task.appendChild(completedBtn());
    };
};
function updateTask(e) {
    const project = e.target.parentNode.parentNode;
    const tasks = projects[project.id];
    const index = tasks.length-1;
    const newTask = addDOMItem(project,`${project.id}-${index}`,"task");
    for (let i = 0;i < 3;i++) {
        addDOMItem(newTask,`${tasks[index].title}-${taskPropKeys[i]}`,taskPropKeys[i],tasks[index][taskPropKeys[i]]);
    };
    newTask.appendChild(completedBtn());
};
function removeTask(e) {
    const task = e.target.parentNode;
    const project = e.target.parentNode.parentNode;
    project.removeChild(task);
};
function toggleTaskForm(e) {
    if (e.target.className === "submit") {
        const taskForm = e.target.parentNode;
        taskForm.style.display = "none";
    } else if (e.target.className === "addTaskBtn") {
        const taskForm = e.target.parentNode.childNodes[2];
        taskForm.style.display = "block";
    };
};
function renderTaskForm(project) {
    function labelOf(item) {
        let label = document.createElement("label");
        label.innerText = item.id.replace("-"," ");
        let output = "";
        let arr = label.innerText.split(" ");
        arr.forEach(word => output += word[0].toUpperCase()+word.substring(1)+" ");
        output = output.trim();
        label.innerText = output;
        label.className = "label";
        label.htmlFor = item.id;
        return label;
    }
    const taskForm = document.createElement("form");
    taskForm.className = "task-form";
    //form inputs
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
            const month = String(date.getMonth()+1).padStart(2,0);
            const day = String(date.getDate()).padStart(2,0);
            return (year + "-" + month + "-" + day)
        };
        const div = document.createElement("div");
        const date = document.createElement("input");
        date.type = "date";
        date.value = today();
        date.id = "date";
        const dateLabel = labelOf(date);
        dateLabel.innerText = "Due Date:"
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
        priorityArr.forEach(function(el) {
            const val = document.createElement("input");
            val.type = "radio";
            val.class = "radio";
            val.id = `${el}`;
            val.value = `priority-${el}`;
            val.name = "priority-level";
            val.innerText = el;
            const tempLabel = labelOf(val);
            if (tempLabel.innerText === "Moderate") {
                val.setAttribute("checked","true");
            };
            priority.appendChild(val)
            priority.appendChild(tempLabel);
        });
        return priority;
    };
    function statusObj() {
        const status = document.createElement("div");
        const statusTitle = document.createElement("h2");
        statusTitle.innerText = "Status";
        status.appendChild(statusTitle);
        const statusArr = ["not started","completed"];
        statusArr.forEach(function(val) {
            const el = document.createElement("input");
                el.type = "radio";
                el.id = val.replace(" ","-");
                el.value = val.replace(" ","-");
                el.name = "completed-status";
                el.innerText = val;
            const elLabel = labelOf(el);
            if (elLabel.innerText === "Not Started") {
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
        submit.className = "submit";
        submit.innerText = "Submit";
        return submit;
    }
    const formItems = [descriptionObj(), dateObj(), priorityObj(), statusObj(), submitObj()];
    formItems.forEach(function(item) {
        taskForm.appendChild(item);
    });
    taskForm.style.display = "none";
    project.appendChild(taskForm);
};
//projects
function renderProjects() {
    const keys = Object.keys(projects);
    //iterates through list of Projects
    for (let i = 0;i < keys.length;i++) {
        const tempProject = addDOMItem(content,keys[i],"project");
        addDOMItem(tempProject,"","projectTitle",keys[i]);
        addDOMItem(tempProject,"","addTaskBtn","Add New Task");
        renderTaskForm(tempProject);
        renderTasks(tempProject.id,tempProject);
    };
};
function updateProjects() {
    const keys = Object.keys(projects);
    const lastIndex = keys.length-1;
    let displayedProjects = document.querySelectorAll(".project");
    if (displayedProjects.length < keys.length) {
        const tempProject = addDOMItem(content,keys[lastIndex],"project")
        addDOMItem(tempProject,"","projectTitle",keys[lastIndex]);
        addDOMItem(tempProject,"","addTaskBtn","Add New Task");
        renderTaskForm(tempProject);
        renderTasks(tempProject.id,tempProject);
    };
};
function addProjectModal() {

};

export {renderProjects, renderHeader, updateTask, updateProjects,toggleTaskForm,removeTask};