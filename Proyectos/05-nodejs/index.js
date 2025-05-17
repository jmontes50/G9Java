//Es la forma de importar de CommonJS, es la forma clásica de trabajar con módulos de node
const axios = require("axios");

console.log("hola desde un proyecto con node");

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((response) => console.log(response))
.catch((error) => console.log(error))
