 
function agregar() {
    const addTasksTextInput = document.getElementById("addTasksTextInput").value //obtenemos el valor del textInput
    const tasks = []; //se crea array
    tasks.unshift({ texto: addTasksTextInput }); //inserteamos un objeto con el valor en el array con 'unshift'
    guardarListado(tasks); //guardamos en localStorage
}



function deleteButton(id, text) {
    delete tasks[id];
    const element = tasksList.querySelector(`#item-${id}`);
    tasksList.removeChild(element);
}

function editButton() {

}

function limpiarInput() {
    addTasksTextInput.value = '';
}