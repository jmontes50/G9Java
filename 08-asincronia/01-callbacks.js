const buscarEnBD = (callback) => {
  //para simular la búsqueda y el tiempo que demora
  setTimeout(() => {
    console.log("Registro encontrado!!!!")
    const registroEncontrado = "Jorge"; //simulando encontrar
    callback(registroEncontrado);
  }, 4000)
  console.log("estoy debajo del setTimeout");
}

const validarUsuario = (nombre) => {
  console.log(`UsuarioValidado ${nombre}`)
}

const alertaFinal = (resultado) => {
  console.log("estoy al final!");
  validarUsuario(resultado)
}

buscarEnBD(alertaFinal);
