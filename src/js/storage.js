function guardarListado(tasks) {
    console.log(tasks)
    localStorage.setItem('key', JSON.stringify(tasks))
    loadTasks()
}