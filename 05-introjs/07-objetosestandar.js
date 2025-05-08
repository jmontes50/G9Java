const texto = "Hola Mundo!";

console.log(texto.length);

console.log(texto.toUpperCase());

const oracion = new String("Hola Mundo desde una instancia"); //No es recomendable

console.log(oracion.length);

//Objeto Math
console.log(Math.round(2.4));

console.log(Math.ceil(2.4));

console.log(Math.floor(5.9));

console.log(Math.random()); // números aleatorios del 0 al 1

console.log(Math.PI);

console.log(Math.E);

//Objeto Date
const hoy = new Date();

console.log(hoy);

const navidad = new Date("2025-12-25");

console.log(navidad);

console.log(hoy.getFullYear());

console.log(hoy.getMonth());

console.log(hoy.getDay());

console.log(hoy.getTime()); //timestamp milisegundos desde el 01 Enero de 1970 00:00

const timestampHoy = hoy.getTime();

const timestampNavidad = navidad.getTime();

console.log(`${timestampNavidad} - ${timestampHoy}`);

const timestampHastaNavidad = timestampNavidad - timestampHoy;

console.log("milisegundos hasta navidad", timestampHastaNavidad);

const diasHastaNavidad = timestampHastaNavidad / 1000 / 60 / 60 / 24;

console.log(diasHastaNavidad);

