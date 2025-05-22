const TableData = (props) => {
  const { data, headers } = props;
  console.log(data);

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
};

export default TableData;
