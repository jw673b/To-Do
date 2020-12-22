import{addNewTask, addNewProject, completeTask,loadSavedKeys} from './logic.js';
import {renderProjects, renderHeader, updateProjects, updateTask, toggleTaskForm, removeTask} from './dom.js';
import css from './style.css';
loadSavedKeys();
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
    addListener(newProjectBtn,addCancelListeners);
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
function addCancelListeners() {
    function arr() {
        let btns = document.querySelectorAll(".cancel");
        btns = Array.from(btns);
        return btns;
    };
    const cancelBtns = arr();
    cancelBtns.forEach(btn => btn.addEventListener("click", toggleTaskForm));
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
addCancelListeners();
addTaskBtnListeners();
addCompleteBtnListeners();

export {addListener,addCompleteBtnListeners};