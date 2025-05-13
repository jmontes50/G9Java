console.log(document);

//selector JS, y que me retorna
const titulo = document.getElementById("titulo");

//objeto tipo Element
console.log(titulo);

titulo.innerHTML = "Welcome to DOM";

titulo.style.color = "orange";

//querySelector, funciona como un selector de css
const parrafos = document.querySelectorAll(".parrafo");

console.log(parrafos);

parrafos.forEach((item) => {
    item.style.color = "blue";
})