//cuando importamos 01 sola cosa, no es necesario respetar el nombre y lo podemos cambiar
import pedidos from "./mismodulos/data.js";
//desestructuramos las propiedades exportadas
import { listarProductos, calcularTotalProductos } from "./mismodulos/operaciones.js";

console.table(pedidos);

console.log(listarProductos(pedidos));

console.log(calcularTotalProductos(pedidos));