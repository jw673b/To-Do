import {test} from './dom.js'
import{createNewProj, addNewTask, addNewProject, task, projects} from './logic.js';
import {renderProjects, renderTasks, renderHeader, updateProjects, updateTasks, renderTaskForms} from './dom.js';
import css from './style.css';

//initializes existing projects/tasks
renderHeader();
renderProjects();
renderTaskForms();
addListener((document.querySelector("#addProjectBtn")),addNewProject);
addListener((document.querySelector("#addProjectBtn")),updateProjects);
addListener((document.querySelector("#addProjectBtn")),renderTaskForms);
addTaskBtnListeners();

function addTaskBtnListeners() {
    function addTaskArr() {
        let arr = document.querySelectorAll(".addTaskBtn");
        arr = Array.from(arr);
        return arr;
    };
    const taskBtnArr = addTaskArr();
    taskBtnArr.forEach(btn => addListener(btn,addNewTask));
    taskBtnArr.forEach(btn => addListener(btn,updateTasks));
};
function addListener(targ,func) {
    targ.addEventListener("click",func);
};

export default addListener;