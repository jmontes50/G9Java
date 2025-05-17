//Es la forma de importar de CommonJS, es la forma clásica de trabajar con módulos de node
// const axios = require("axios");

//ESModules - ECMAscript Modules <-- en el package.json "type":"module"
import axios from "axios";

console.log("buenas noches desde un proyecto con node y configurado");

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((response) => console.log(response))
.catch((error) => console.log(error))



//CommonJS Export
// module.exports = {
//     nombre_funcion
// }