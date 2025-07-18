function sumar (a, b) {
  return a + b;
}

let suma = sumar(10, 20);
console.log(suma);

//función anónima
//Las funciones en JS se consideran ciudadanos de 1ra clase
//una función se puede tratar como una variable más
const resta = function (a, b) {
  return a - b;
}

console.log(resta(20, 5));

//arrow functions, funciones flecha
const multiplicacion = (a, b) => {
  return a * b;
}

console.log(multiplicacion(10, 4));

const division = (a, b) => a / b;

console.log(division(100, 4));

const saludar = nombre => `Hola soy ${nombre}`;

console.log(saludar("Jorge"));

//-------------------------funciones callback
const ejecutarOperacion = (operacion, a, b) => {
  return operacion(a, b);
}

console.log(ejecutarOperacion(division, 100, 20));
console.log(ejecutarOperacion(sumar, 100, 20));

console.log(ejecutarOperacion((x, y) => {
  return (x + y) * 1000;
}, 4, 5));

console.log(ejecutarOperacion(function (x, y){
  return (x + y) + 1000;
}, 4, 5));