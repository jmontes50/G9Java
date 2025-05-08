// for(inicializador; límite; actualizador) {}
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let compras = prompt("cuantas compras hiciste?");

let numberCompras = parseInt(compras);

let costoTotal = 0;

for (let i = 1; i <= numberCompras; i++){
  let costoActual = prompt("Cuanto te costo esta compra?");
  let numberCostoActual = parseFloat(costoActual);
  costoTotal = costoTotal + numberCostoActual;
  // costoTotal += numberCostoActual;
}

console.log(`Gastaste un total de ${costoTotal}`);

