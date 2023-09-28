const tbody = document.getElementById("tasksList")
const inputText = document.getElementById("addTasksTextInput");
const numTareas = document.getElementById("numTareas")
const tareasChecked = document.getElementById("tareasCheck")
const datepicker = document.getElementById("datepicker")
const header = document.getElementById("cabecera")
const barra = document.getElementById("barra")

function loadTasks() {
    if (JSON.parse(localStorage.getItem("LLAVE"))) {
        totalTasks()
        checkTasks()
        barraTareas()
        const items = get()
        if (items.length > 0) {
            let taskListContent = "";
            let check = '';
            let styleCheck = "text-decoration: none"
            header.innerHTML = `<th>Tarea</th><th>Fecha Límite</th><th></th><th></th><th></th>`
            
            for (let i = 0; i < items.length; i++) {
                if (items[i].check) {
                    check = 'checked'
                    styleCheck = "text-decoration: line-through"
                } else {
                    check = ''
                    styleCheck = "text-decoration: none"
                }
                
                // por cada iteracion vamos creando un LI con los datos del array
                taskListContent += `<tr class="items" id="item-${[i]}">
                <td id="editarTexto-${[i]}"><span class="textoTarea" style="${styleCheck}" id="tareaCheck-${[i]}">${items[i].texto}</span></td>
                <td id="fecha-${[i]}"><span class="fechaEntrega">${items[i].fecha}</span></td> 
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

//1. Validar que se ingrese tarea y fecha y poder guardar = function guardar
//2. Guardar la fecha en el storage con propiedad fecha y el valor fecha
//3. Imprimir la fecha en la tabla = interpolación
 
//Nota. Revisar los métodos de fecha: Date, getDate, getMonth, etc.

