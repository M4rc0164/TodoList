const array = ['Lucas', 'Pedro', 'Juan']
const ul = document.getElementById("tasksList")

function loadTasks(items) {

    /* 
    const tasksList = localStorage.getItem("key")
    console.log(tasksList) */
    let taskListContent = '';
    for (let i = 0; i < items.length; i++) {

        console.log(items[i])
        taskListContent += `<li class="items" id="item-${[i]}" > <span> ${items[i]} </span> 
        <input class="deleteButton" type="button" value="Eliminar" onclick="deleteButton(${[i]}, '${items[i]}')"> 
        <input id="editButton" class="editButton" type="button" value="Editar"></li>`;
        console.log(taskListContent)
        ul.innerHTML= taskListContent;
    }
}


loadTasks(array)