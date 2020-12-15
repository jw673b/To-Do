//constants
const task = () => {
    let description, date, priority, status, project, index;
    return {description, date, priority, status, project, index};
}
let projects = {"Tasks":[]};

//functions
function addNewTask(e) {
    e.preventDefault();
    function pullTaskInfo(e) {
        let sisNodes = e.target.parentNode.childNodes;
        const descriptionNode = sisNodes[0];
        const dateNode = sisNodes[1];
        const priorityNode = sisNodes[2];
        const statusNode = sisNodes[3];

        function descriptionVal() {
            const val = descriptionNode.childNodes[1].value;
            return val;
        };
        function dateVal() {
            const val = dateNode.childNodes[1].value;
            return val;
        };
        function priorityVal() {
            const childNodes = priorityNode.childNodes;
            let val;
            childNodes.forEach(node => {
                if (node.checked === true) {
                    val = node.id;
                }
            });
            return val;
        };
        function statusVal() {
            const childNodes = statusNode.childNodes;
            let val;
            childNodes.forEach(node => {
                if (node.checked === true) {
                    val = node.id;
                }
            });
            return val;
        };
        function indexVal() {
            const proj = projects[e.target.parentNode.parentNode.id]
            const val = proj.length;
            return val;
        };
        function projectVal() {
            const val = e.target.parentNode.parentNode.id
            return val;
        };

        let description = descriptionVal();
        let date = dateVal();
        let priority = priorityVal();
        let status = statusVal();
        let index = indexVal();
        let project = projectVal()
        return [description,date,priority,status,project,index];
    };
    function initNewTask() {
        const taskPropKeys = ["description","date","priority","status","project","index"];
        let taskProps = pullTaskInfo(e);
        let newTask = task();
        for (let i=0;i < 6;i++) {
            newTask[taskPropKeys[i]] = taskProps[i];
        };
        return newTask;
    };
    const newTask = initNewTask();
    const project = e.target.parentNode.parentNode.id;
    projects[project].push(newTask);
};
function addNewProject() {
    projects[prompt("Name of new project?")] = [];
};
function completeTask(e) {
    const taskId = e.target.parentNode.id;
    const searchVals = taskId.split("-");
    const task = projects[searchVals[0]][searchVals[1]];
    task.status = "completed"
    console.log(projects[searchVals[0]])
};
export {addNewTask, addNewProject, task, projects, completeTask}; 