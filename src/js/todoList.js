const addTasksTextInput = document.getElementById("addTasksTextInput")
const addButton = document.getElementById("addButton")
const tasksList = document.getElementById("tasksList")

const tasks = [];

addButton.onclick = function () {
    const taskText = addTasksTextInput.value;
    tasks.push(taskText);
    loadTasks();
    addTasksTextInput.value = '';
}

function loadTasks() {

    let taskListContent = '';
    for (let i = 0; i < tasks.length; i++) {
        console.log([i])
        taskListContent += `<li class="items" id="item-${[i]}" > <span> ${tasks[i]} </span> 
        <input class="deleteButton" type="button" value="Eliminar" onclick="deleteButton(${[i]}, '${tasks[i]}')"> 
        <input id="editButton" class="editButton" type="button" value="Editar"></li>`;
    }
    tasksList.innerHTML = taskListContent;
}

function deleteButton(id, text) {
    delete tasks[id];
    const element = tasksList.querySelector(`#item-${id}`);
    tasksList.removeChild(element);
}

function editButton() {

}

