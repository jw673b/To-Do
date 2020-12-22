//constants
const task = () => {
    let description, date, priority, status, project, index;
    return {description, date, priority, status, project, index};
}
let projects = {};
//functions
function loadSavedKeys() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {//key = individual projects
        let tempArr = []
        const tasks = localStorage[key].split(";");
        tasks.forEach(task => {
            let tVals = [];
            const els = task.split(",");
            els.forEach(el => {
                const start = (el.indexOf(":"))+1;
                const val = el.slice(start)
                tVals.push(val);
            });
            let tempTask = {};
            tempTask.description = tVals[0];
            tempTask.date = tVals[1];
            tempTask.priority = tVals[2];
            tempTask.status = tVals[3];
            tempTask.project = tVals[4];
            tempTask.index = tVals[5];  
            tempArr.push(tempTask);        
        });
        projects[key] = tempArr;
    });
};
function updateStorage(key) {
    let tasks = projects[key];
    let keys = Object.keys(task());
    function value() {
        let val = "";
        tasks.forEach(task => {
            let temp;
            if (val === "") {
                temp = "";
            } else {
                temp = ";";
            };
            for (let i = 0;i < keys.length-1;i++) {
                temp += `${keys[i]}:${task[keys[i]]},`;
            }
            temp += `${keys[keys.length-1]}:${task[keys[keys.length-1]]}`;
            val+=temp;
        });
        return val;
    }

    localStorage.setItem(key,value());
    console.log(localStorage);
};
function addNewTask(e) {
    e.preventDefault();
    function pullTaskInfo(e) {
        let sisNodes = e.target.parentNode.childNodes;
        const descriptionNode = sisNodes[0];
        const dateNode = sisNodes[1];
        const priorityNode = sisNodes[2];

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
            return "not-completed";
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
    updateStorage(project);
};
function addNewProject() {
    projects[prompt("Name of new project?")] = [];
    const key = Object.keys(projects).pop();
    updateStorage(key);
};
function completeTask(e) {
    const taskId = e.target.parentNode.id;
    const searchVals = taskId.split("-");
    const task = projects[searchVals[0]][searchVals[1]];
    task.status = "completed"
    updateStorage(searchVals[0]);
};
export {addNewTask, addNewProject, task, projects, completeTask,loadSavedKeys}; 