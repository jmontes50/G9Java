let frutas = ["Kiwi", "Naranja", "Piña"];

console.log(frutas);

console.log(frutas[1]);

let medidas = ["1kg", "10lt", 100, true, "1 metro"];

console.log(medidas[4]);

console.log("longitud de frutas", frutas.length);

//agrega al final
frutas.push("Yacón");

console.log(frutas);

//remover un item del final
frutas.pop();
console.log(frutas);

//Agregar un item al inicio
frutas.unshift("Manzana");
console.log(frutas);

//Remueve un item del inicio
frutas.shift();
console.log(frutas);