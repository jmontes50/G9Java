if (100 > 1000) {
  // verdadero
  console.log("100 es el número mayor");
} else {
  // falso
  console.log("100 es el número menor");
}

let edad = prompt("ingrese su edad");

console.log(typeof edad);

let numberEdad = parseInt(edad); //convertirlo a un Entero

// if(edad == 30) {
if(numberEdad === 30) { //=== evalua el valor y el tipo de dato, Recomendable!
  console.log("Tiene 30");
} else {
  console.log("No tiene 30");
}

let nota = prompt("Ingrese su nota");

let numberNota = parseFloat(nota);

if(nota >= 18) {
  console.log("Aprobo con honores");
} else if (nota >= 13) {
  console.log("Esta aprobado");
} else if (nota >= 11) {
  console.log("Va a recuperación");
} else {
  console.log("Desaprobo");
}

let rol = prompt("Ingrese el rol que tendrá el usuario: admin, supervisor, usuario");

console.log("Ud ha indicado el sgte. rol:" + rol);

if(rol === "admin" || rol === "supervisor"){
  console.log("Ud puede acceder a los reportes");
} else if(rol === "usuario") {
  console.log("Ud. puede acceder a sus propios reportes");
} else {
  console.log("rol incorrecto");
}

if (!undefined) {
  console.log("es falsy")
}

//operador ternarios
let esTruthy = 10 < 100 ? "Es verdadero" :  "Es falso";

console.log(esTruthy)