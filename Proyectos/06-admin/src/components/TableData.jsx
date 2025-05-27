import icons from "../utils/icons";

const TableData = (props) => {
  const { data, headers, actions } = props;
  console.log(actions);

  return (
    <table className="border-collapse border-t-2 w-full px-4 py-2">
      <thead>
        <tr>
          {/* en algunos casos podemos usar el index de un arreglo como key, lo ideal es que tengamos un id pero de ser necesario es útil */}
          {headers.map((item, indice) => (
            <th key={indice} className="border-t-2 px-4 py-2">
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* recorremos data/products 1 x 1*/}
        {data.map((product) => (
          <tr key={product.id}>
            {/* dentro de la fila recorremos otra vez headers */}
            {headers.map((head, i) => (
              <td key={i} className="border-t-2 px-4 py-2">
                {/* {console.log(head.name, head.format)} */}
                {head.format
                  ? head.format(product[head.name])
                  : product[head.name]}
                {/* {product[head.name]} */}
              </td>
            ))}
            {/* actions */}
            {actions.map((act, i) => (
              <td key={i} className="border-t-2 px-4 py-2">
                <button
                  className={act.class}
                >
                  <i className={icons[act.icon]} />
                  {/* {act.name} */}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  /*
  return (
    <table>
      <tbody>
        {data.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  */
};

export default TableData;
