let gato = {
  nombre: "Miaushuno",
  edad: 19,
  color: "Variado",
  amigable: true,
  maullar: function() {
    console.log(`${this.nombre} Miauuuu`);
  },
  //en objetos, clases, para métodos no usar arrow function si usaremos this
  // maullar: () => {
  //   console.log(`${this.nombre} Miauuuu`);
  // },
  dormir() {
    console.log("ZZZZ");
  }
}

console.log(gato);

console.log(gato.nombre);

// bracket notation
console.log(gato['color']);

let nombrePropiedad = "edad";

console.log(gato[nombrePropiedad]);

gato.maullar();

gato.dormir();