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

//desestructuración

let { edad, nombre, color, dormir, amigable } = gato;

console.log(nombre);

const registrarMascota = ({ nombre, edad, color, docil }) => {
  console.log(`El registro de ${nombre} de edad ${edad} con color ${color} y de carácter ${docil} se realizó!`);
}

// registrarMascota("Flow", 10, "amigable", "negro");

let nuevaMascota1 = {
  docil: "amigable",
  nombre: "Flow",
  color: "negro",
  edad:2,
  vacunado: true,
  colorOjos: "Amarillos"
}

registrarMascota(nuevaMascota1);