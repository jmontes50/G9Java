const listarProductos = (arr) => {
  const productos = arr.map((item) => item.producto);
  return productos;
}

const calcularTotalProductos = (arr) => {
  const total = arr.reduce((acumulador, item) => {
    return acumulador + item.cantidad;
  }, 0)

  return total;
}

//exportar varias cosas, exportamos un obj
export {
  listarProductos,
  calcularTotalProductos
}