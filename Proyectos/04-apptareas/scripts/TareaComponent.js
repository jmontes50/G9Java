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

  //podemos utilizar querySelector en un element
  const btn = liTarea.querySelector(".btn-eliminar");
  btn.addEventListener("click", () => {
    alert(`Vamos a eliminar ${tarea}`);
  });

  return liTarea;
}

export default TareaComponent;