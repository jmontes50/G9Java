const validarPermisos = (rol = "Persona", nombre = "Juan") => {
  if (rol === "admin") {
    console.log(rol + " Tiene todos los permisos");
  } else if (rol === "user") {
    console.log(rol + " Puede ver su informacion");
  } else {
    console.log(rol + " No tiene acceso");
  }
};

validarPermisos();
validarPermisos("admin");

//desestructuracion de arreglos

const platos = ["Ensalada de Palta", "Seco de cabrito", "Chicha Morada"];

// console.log(platos[1]);
// const entrada = platos[0];
const [entrada, segundo, bebida] = platos;

console.log(entrada);
console.log(segundo);
console.log(bebida);

