/**
 * @description función que agrega la tarea escrita
 */

function agregar() {
  // No agregar elementos vacíos
  if (inputText.value === "" || datepicker.value === "") {
    //retorna si está vacío

    return;
  }
  const items = get()
  //insertamos un objeto con el valor  en el array con 'push'
  items.push({ texto: inputText.value.trim(), fecha: datepicker.value.trim() })// usamos método TRIM  para eliminar espacios adelante y atrás
  set(items)
  inputText.value = ""; //limpiamos el input
  datepicker.value = "";
  loadTasks();//cargamos loadTask para imprimir de nuevo
  barraTareas()
}

/**
 * 
 * @description Funcion que eliminar el elemento del array y del DOM 
 */
function borrarLista(id) {
  // obtenemos el array del storage
  const parametro = get()
  console.log(parametro)
  // eliminamos el id seleccionado del array
  parametro.splice(id, 1);
  // volvemos a setear el nuevo valor del array
  set(parametro)
  // obtenemos el id del listado <li></li>
  const element = document.getElementById(`item-${id}`);


  // si existe el elemento los removemos del DOM
  if (element) {
    element.remove();
  }

  // cargamos nuevamente la lista
  loadTasks();
}

/**
 * 
 * @description Funcion que edita la tarea escrita
 * @param id:number 
 * @param texto:string
 */
function editarTarea(id, texto) {

  //se le pasa el id del td con la tarea(texto)
  const td = document.getElementById(`editarTexto-${id}`)
  //Se cambia el td por un input usando innerHTML
  td.innerHTML = `<input class="inputSave textoTarea" id="tareaInput-${id}" type="text" value="${texto}">`

  //Transformar Botón a guardar
  const tdBt = document.getElementById(`editarBoton-${[id]}`) //Se le pasa el id del td con el botón
  //Se cambia el botón editar por guardar usando innerHTML
  tdBt.innerHTML = `<input class="saveButton" type="button" value="Guardar" onclick="guardarTarea(${id})">`
}

/**
 * 
 * @description Funcion que guarda el nuevo valor y reestablece el botón editar y el span
 * @param id:number 
 */
function guardarTarea(id) {
  const tareaInput = document.getElementById(`tareaInput-${[id]}`)
  const tdBt = document.getElementById(`editarBoton-${[id]}`)
  const td = document.getElementById(`editarTexto-${id}`)
  const obtener = get()
  obtener[id].texto = tareaInput.value.toUpperCase()
  set(obtener)
  tdBt.innerHTML = `<input class="editButton" type="button" value="Editar" onclick="editarTarea(${[id]}, '${obtener[id].texto}')"></input>`
  td.innerHTML = `<span>${obtener[id].texto}</span>`
}

/* function checkTarea(id) {
  const checkbox= document.getElementById(`marcador-${id}`)
  console.log("ya chequeó", id)
  console.log(checkbox.checked)
} */

/**
 *
 * @description Funcion agrega un marcador al textop cuando la tarea esta terminada
 * @param id:number
 */
function checkTarea(id) {
  const checkbox = document.getElementById(`marcador-${id}`);
  const idTarea = document.getElementById(`tareaCheck-${id}`)
  const llave = get()
  llave[id].check = checkbox.checked
  if (checkbox.checked) {
    idTarea.style = "text-decoration: line-through"
  } else {
    idTarea.style = "text-decoration: none"
  }

  set(llave)
  loadTasks()
  barraTareas()
}

function totalTasks() {
  const tareas = get()
  let numeroDeTareas;
  if (tareas.length > 0) {
    for (let i = 0; i < tareas.length; i++) {
      numeroDeTareas = `<td>${[tareas.length]}</td>`;
      numTareas.innerHTML = numeroDeTareas
    }
  } else {
    numTareas.innerHTML = `<td>0</td>`
  }
}

function checkTasks() {
  const tareas = get()
  let checkTareas;
  let suma = 0
  if (tareas.length > 0) {
    for (let i = 0; i < tareas.length; i++) {
      if (tareas[i].check) {
        suma += 1
      }
    }
    checkTareas = `<td>${[suma]}</td>`;
    tareasChecked.innerHTML = checkTareas
  } else {
    tareasChecked.innerHTML = `<td>${[suma]}</td>`
  }
}

function barraTareas() {
  const array = get()
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].check) {
      suma += 1
    }
    
  }
  console.log(suma)
  barra.innerHTML = `<progress id="file" value="${suma}" max="${array.length}"></progress>`
}



//se reciben parámetros según el orden en el que se envían
//"LLAVE" = ARREGLO
//getItem = obtiene
//setItem = llena y se le da una clave
//stringfy : convierte a string
//parse : convierte para que JS pueda interpretarlo
//.splice() cambia el contenido de un arreglo cambiando los existentes por nuevos
// text-decoration: line-through; 