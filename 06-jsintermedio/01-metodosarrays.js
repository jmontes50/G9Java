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
let preciosDentroPresupuesto = precios.filter((num) => {
  return num >= 30 && num <= 60;
});

console.log("filter - ", preciosDentroPresupuesto)