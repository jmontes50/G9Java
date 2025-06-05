//guardara en localStorage
const saveStorage = (name, data) => {
    //convertir data a texto
    const JSONdata = JSON.stringify(data);
    //guardalo en el localStorage
    localStorage.setItem(name, JSONdata)
}

//leer algo del localStorage y retornarlo
const getStorage = (name) => {
    //getItem lee algo por su nombre pero como texto
    const JSONdata = localStorage.getItem(name);
    //Convierte JSON(string) a JS
    const data = JSON.parse(JSONdata);
    return data
}

export {
    saveStorage,
    getStorage
}