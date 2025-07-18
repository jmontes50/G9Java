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

//--------------------------------------
const footer = document.querySelector("footer");

//En estos casos es muy util el backtick
footer.innerHTML = `
  <h3>Información</h3>
  <ul>
    <li>Correo: info@gmail.com</li>
    <li>Dirección: Av. Lima</li>
  </ul>
  <button id="btn-footer">
    Contáctenos
  </button>
`;

const btnFooter = document.getElementById("btn-footer");

console.log(btnFooter);
btnFooter.style.color = "red";
//background-color, cambiamos de kebabCase a camelCase
btnFooter.style.backgroundColor = "lightgreen";

//Crear un objeto element, (div) (header)
const img = document.createElement("img");

img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMCE_I9HLqulrBpGr5RzuOZRONZEINA0_Bg&s");

console.log(img);

footer.appendChild(img);