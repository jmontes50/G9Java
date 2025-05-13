const buscarEnBD = (callback) => {
  //para simular la búsqueda y el tiempo que demora
  setTimeout(() => {
    console.log("Registro encontrado!!!!")
    callback();
  }, 4000)
  console.log("estoy debajo del setTimeout");
}

const alertaFinal = () => {
  console.log("estoy al final!");
}

buscarEnBD(alertaFinal);
