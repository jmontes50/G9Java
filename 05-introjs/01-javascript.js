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

//operaciones aritméticas
console.log("suma", 10 + 20);
console.log("resta", 10 - 20);
console.log("multiplicación", 10 * 20);
console.log("división", 100 / 20);
console.log("módulo/residuo", 100 % 6);

//cuidado!!!
let notafinal = "20";
//el símbolo + se puede usar para concatenación, NO es recomendable
console.log("queramos hacer una suma", 10 + notafinal);
console.log("Reeeesta", "100" - 20);
console.log("hola " + nombre);
//Template string, template literals, esta forma es la recomendada
console.log(`Hola ${nombre} tu nota es de ${16 + 2}`) //backticks `` - alt + 96
