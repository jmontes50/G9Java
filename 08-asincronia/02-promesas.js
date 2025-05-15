/*
const buscarEnBD = () => {
  setTimeout(() => {
    const aleatorio = Math.random() //0 y 1 ej 0.6
    if(aleatorio > 0.7) {
      console.log("Se encontro el usuario");
    } else {
      console.log("No se encontro el usuario");
    }
  }, 3000)
}

buscarEnBD();
console.log("Después de llamar a buscar en BD");
*/

const buscarEnBDPromesa = () => {
  return new Promise((resolve, reject) => {
    //el código asíncrono ira aquí dentro}
    setTimeout(() => {
      const aleatorio = Math.random() //0 y 1 ej 0.6
      console.log({ aleatorio });
      if(aleatorio > 0.4) {
        // console.log("Se encontro el usuario");
        resolve("Se encontro el usuario") //todo va bien el resultado es +
      } else {
        // console.log("No se encontro el usuario");
        reject("No se encontro el usuario") //si fue mal
      }
    }, 3000)
  })
}

const registrarEnEvento = () => new Promise ((resolve, reject) => {
  setTimeout(() => {
    const seRegistro = Math.random();
    console.log({ seRegistro });
    if(seRegistro > 0.3){
      resolve("Registro exitoso");
    }else{
      reject("Error al registrar");
    }
  }, 2000)
})

buscarEnBDPromesa()
.then((result) => { //resolve +
  console.log(result); 
  //retornar la nueva promesa, para hacer encadenamiento de promesas
  return registrarEnEvento();
})
.then((resultado) => {
  console.log(resultado);
})
.catch((err) => { //reject -
  console.log(err)
});