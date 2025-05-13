console.log(document);

//selector JS, y que me retorna
const titulo = document.getElementById("titulo");

//objeto tipo Element
console.log(titulo);

titulo.innerHTML = "Welcome to DOM";

titulo.style.color = "orange";

//querySelector, funciona como un selector de css
//querySelectorAll obtiene todos los element según el selector dado como argumento
const parrafos = document.querySelectorAll(".parrafo");

console.log(parrafos);

parrafos.forEach((item) => {
    item.style.color = "blue";
})

const inputEmail = document.querySelector("#input-email");

console.log(inputEmail);
//leer el valor de atributos
const atributo = inputEmail.getAttribute("id");

console.log(atributo);
//modificar el valor de atributos
inputEmail.setAttribute("type", "email");
//agregar nuevos atributos
inputEmail.setAttribute("placeholder","Ingrese su correo");