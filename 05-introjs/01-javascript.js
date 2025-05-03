console.log("Hola Mundo!!");
// esto es un comentario de línea
/* 
Un bloque
de código
que es un comentario
*/
// NO usar var para declarar variables
let nombre = "Jorge";
nombre = "George";
console.log(nombre);

const IGV = 1.18; //CONSTANTE no podemos cambiarle de valor

// IGV = 1.15;

console.log(typeof nombre);
console.log(typeof IGV);

let llueve = false; //true
console.log(llueve);
console.log(typeof llueve);

//tipado dinámico
let nota = 20;
console.log("como number", nota);
nota = "veinte";
console.log("como string", nota);