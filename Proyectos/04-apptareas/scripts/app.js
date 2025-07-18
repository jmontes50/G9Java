import TareaComponent from "./TareaComponent.js";

const formTarea = document.getElementById("form-tarea");
const listaTareas = document.getElementById("lista-tareas");

let tareas = [];

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formData = new FormData(formTarea);
  // console.log(formData);
  const data = Object.fromEntries(formData.entries());
  // console.log(data);

  tareas.push(data.tarea);
  console.table(tareas);
  dibujarTareas();
});

const eliminarTarea = (indice) => {
  tareas.splice(indice, 1); //eliminar
  dibujarTareas(); //actualizar
}

const dibujarTareas = () => {
  listaTareas.innerHTML = "";
  tareas.forEach((item, indice) => {
    const elementoTarea = TareaComponent(item, indice, eliminarTarea);
    listaTareas.appendChild(elementoTarea);
  })
}