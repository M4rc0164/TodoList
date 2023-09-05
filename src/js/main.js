const tbody = document.getElementById("tasksList")
const inputText = document.getElementById("addTasksTextInput");

function loadTasks() {
    if (JSON.parse(localStorage.getItem("LLAVE"))) {
        const items = get()
        if (items.length > 0) {
            let taskListContent = "";
            for (let i = 0; i < items.length; i++) {
                // por cada iteracion vamos creando un LI con los datos del array
                taskListContent += `<tr class="items" id="item-${[i]}">
                <td id="editarTexto-${[i]}"><span>${items[i].texto}</span></td> 
                <td id="editarBoton-${[i]}"><input class="editButton" type="button" value="Editar" onclick="editarTarea(${[i]}, '${items[i].texto}')"></td>
                <td><input class="deleteButton" type="button" value="Eliminar" onclick="borrarLista(${[i]})"></td>
                <td id="checkboxes-${[i]}"><input type="checkbox" name="marcador" id="marcador-${[i]}"></td>
                </tr>`;
                // imprimimos cada elemento del array
                tbody.innerHTML = taskListContent;
            }
        } else {
            tbody.innerText = "Agrega tu primer tarea"
        }
    } else {
        localStorage.setItem("LLAVE", JSON.stringify([]));
        console.log("no existe llave");
        tbody.innerText = "Agrega tu primer tarea"
    }

}

loadTasks()

