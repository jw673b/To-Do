//constants
//fix the useage of the 
const task = (title) => {
    let date = new Date();
    date = date.toLocaleDateString("en-US");
    return {title, description:"", date, priority:"medium", completed:false};
}
let projects = {"Tasks":[]};

//functions
function addNewTask(e) {
    let taskArr = projects[e.target.parentNode.id]
    taskArr.push(task(prompt("What do we add?")));
    projects[e.target.parentNode.id] = taskArr;
    return projects[e.target.parentNode.id];
};

function addNewProject() {
    projects[prompt("Name of new project?")] = [];
    console.log(projects);
};

export {addNewTask, addNewProject, task, projects};