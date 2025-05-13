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

//Eventos
const button = document.querySelector("#btn");

console.log(button);
button.addEventListener("click", () => {
    alert("Hola mundo desde JS!");
})

//aplica para cuando cambie el valor de algo, en un input cuando cambio y se le deja de hacer focus
//En un select cuando cambiamos de opción
// inputEmail.addEventListener("change", () => {
//input detecta c/cambio al escribir
inputEmail.addEventListener("input", () => {
    console.log(inputEmail.value);
})

// //keypress, keydown, keyup
// inputEmail.addEventListener("keyup", () => {
//     console.log(inputEmail.value);
// })