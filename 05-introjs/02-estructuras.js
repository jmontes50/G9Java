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
}else{
  console.log("No tiene 30");
}