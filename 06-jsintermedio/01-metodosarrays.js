let frutas = ["Kiwi", "Naranja", "Piña", "Mandarina", "Fresas"];

console.log(frutas);

const arr = frutas.forEach((item, indice, arreglo) => {
  console.log(`Hoy tenemos ${indice} - ${item}`);
  console.log(arreglo);
})

// for(let i = 0; i < frutas.length; i++) {
//   console.log(`Hoy tenemos ${i} - ${frutas[i]}`);
// }

//El método forEach retornará algo????

// console.log(arr);

//transformar
let frutasMayus = frutas.map((item, index) => {
  return `${index + 1} - ${item.toUpperCase()}`;
});

console.log("Map - ", frutasMayus);
// console.log("OG - ", frutas);

let precios = [20, 30, 40, 50, 60, 70, 100];

//filtrar
// let preciosDentroPresupuesto = precios.filter((num) => {
//   return num >= 30 && num <= 60;
// });
// let preciosDentroPresupuesto = precios.filter(function(num) {
//   return num >= 30 && num <= 60;
// });
// const paraFiltrar = (num) => {
//   return num >= 30 && num <= 60;
// }
// let preciosDentroPresupuesto = precios.filter(paraFiltrar);
let preciosDentroPresupuesto = precios.filter((num) => num >= 30 && num <= 60);

console.log("filter - ", preciosDentroPresupuesto);

let edades = [20, 30, 19, 18, 30, 42, 25, 28];

// const ordenado = edades.sort();
const ordenado = edades.toSorted();

console.log(ordenado);

console.log("OG - ", edades);

//reduce
let sumaEdades = edades.reduce((acumulador, item) => {
  return acumulador + item;
})

console.log(sumaEdades);

let carrito = [
  { prod:"Chifles", precio: 10 },
  { prod:"Frijoles", precio: 6 },
  { prod:"King Kong", precio: 25 }
]

let total = carrito.reduce((acumulador, item) => {
  console.log("acumulador: ", acumulador)
  console.log("item: ",item.precio);
  return acumulador + item.precio;
  //como 2do argumento podemos indicar el valor inicial de acumulador
}, 0);

console.log(total);