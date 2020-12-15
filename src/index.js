import {test} from './dom.js'
import{createNewProj, addNewTask, addNewProject, task, projects, pullTaskInfo, completeTask} from './logic.js';
import {renderProjects, renderHeader, updateProjects, updateTask, toggleTaskForm} from './dom.js';
import css from './style.css';

renderHeader();
renderProjects();

function addListener(targ,func) {
    targ.addEventListener("click",func);
};
function newProjectListeners() {
    const newProjectBtn = document.querySelector("#addProjectBtn");
    addListener(newProjectBtn,addNewProject);
    addListener(newProjectBtn,updateProjects);
    addListener(newProjectBtn,addSubmitListeners);
    addListener(newProjectBtn,addTaskBtnListeners);
};
function addSubmitListeners() {
    function arr() {
        let btns = document.querySelectorAll(".submit");
        btns = Array.from(btns);
        return btns;
    };
    const submitBtns = arr();
    submitBtns.forEach(btn => btn.addEventListener("click", addNewTask));
    submitBtns.forEach(btn => btn.addEventListener("click", updateTask));
    submitBtns.forEach(btn => btn.addEventListener("click", toggleTaskForm));
};
function addTaskBtnListeners() {
    function arr() {
        let btns = document.querySelectorAll(".addTaskBtn");
        btns = Array.from(btns);
        return btns;
    };
    const addTaskBtns = arr();
    addTaskBtns.forEach(btn => btn.addEventListener("click", toggleTaskForm));
};
function addCompleteBtnListeners() {
    function arr() {
        let btns = document.querySelectorAll(".marked-completed");
        btns = Array.from(btns);
        return btns;
    };
    const completeBtns = arr();
    completeBtns.forEach(btn => btn.addEventListener("click", completeTask));
    completeBtns.forEach(btn => btn.addEventListener("click", removeTask));
};



newProjectListeners();
addSubmitListeners();
addTaskBtnListeners();
addCompleteBtnListeners();

export {addListener,addCompleteBtnListeners};