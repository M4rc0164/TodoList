const tbody = document.getElementById("tasksList")
const inputText = document.getElementById("addTasksTextInput");

function loadTasks() {
    if (JSON.parse(localStorage.getItem("LLAVE"))) {
        const items = get()
        if (items.length > 0) {
            let taskListContent = "";   
            let check = '';
            let styleCheck = "text-decoration: none"
            for (let i = 0; i < items.length; i++) {
                if (items[i].check) {
                    check = 'checked'
                    styleCheck = "text-decoration: line-through"
                }
                
                // por cada iteracion vamos creando un LI con los datos del array
                taskListContent += `<tr class="items" id="item-${[i]}">
                <td id="editarTexto-${[i]}"><span style="${styleCheck}" id="tareaCheck-${[i]}">${items[i].texto}</span></td> 
                <td id="editarBoton-${[i]}"><input class="editButton" type="button" value="Editar" onclick="editarTarea(${[i]}, '${items[i].texto}')"></td>
                <td><input class="deleteButton" type="button" value="Eliminar" onclick="borrarLista(${[i]})"></td>
                <td onclick="checkTarea(${[i]})"><input type="checkbox" name="marcador-${[i]}" id="marcador-${[i]}" ${check}></td>
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

