//Componente va a ser una función
const TareaComponent = (tarea, indice) => {
  const liTarea = document.createElement("li");

  liTarea.innerHTML = `
    <span>${tarea}</span>
    <button 
      class="btn-eliminar bg-black text-white text-sm p-1 rounded"
    >
      Eliminar
    </button>
  `;

  return liTarea;
}

export default TareaComponent;