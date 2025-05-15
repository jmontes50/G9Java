// const obtenerDatos = () => new Promise((resolve, reject) => {
//   resolve("Datos obtenidos!");
//   // reject("No se encontraron datos");
// })

const obtenerDatos = async () => {
  // setTimeout(() => {
  //   return "Datos obtenidos!";
  // }, 3000)
  const aleatorio = Math.random();
  console.log(aleatorio)
  // alert("soy una alerta!");
  if (aleatorio > 0.4) {
    return "Datos obtenidos!";
  } else {
    throw "No se encontraron datos";
  }
};

// async function obtenerDatos () {
//   return "Datos obtenidos!";
//   // throw "No se encontraron datos";
// }

// obtenerDatos()
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const iniciar = async() => {
  try {
    const res = await obtenerDatos(); //return / resolve
    console.log(res);
  } catch (error) {
    console.log(error) //throw / reject
  }
}
iniciar();
