/* 2 funciones
una que obtnega la llave y devuelva el valor getItem
y otra que obtnega el valor, los setee y devuelva el contenido setItem  */

function get() {
    //obtenemos el array del storage
    const items = JSON.parse(localStorage.getItem("LLAVE"));
    return items
}

function set(items) {
    localStorage.setItem("LLAVE", JSON.stringify(items)); 
}


