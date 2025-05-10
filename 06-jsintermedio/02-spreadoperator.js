const tarea = {
  nombre:"Proyecto",
  paginas:100,
  tema:"Biología"
}

//copia por referencia, solo pasa cuando son NO primitivos
const tarea2 = tarea;

tarea2.paginas = 75;
tarea2.tema = "Biotecnología"

console.log("tarea2 ", tarea2);

console.log("tarea ", tarea);

///pausa, cuando hacemos una copia de un primitivo si lo hacemos por Valor
const edad = 27;

let copiaEdad = edad;

copiaEdad = copiaEdad + 10;

console.log("edad ", edad);
console.log("copiaEdad ", copiaEdad);

//SPREAD OPERATOR, operador de propagación
const nuevaTarea = {
  nombre:"Monografía",
  paginas: 10,
  tema: "IA"
}

const copiaNuevaTarea = { ...nuevaTarea };

copiaNuevaTarea.tema = "Blockchain";
console.log("copiaNuevaTarea ", copiaNuevaTarea);

console.log("NuevaTarea ",nuevaTarea);