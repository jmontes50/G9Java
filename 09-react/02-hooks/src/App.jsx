import { useState } from "react";

const App = () => {
  //const [estado, funcActualizaElEstado] = useState(valor_inicial)
  const [contador, setContador] = useState(1);
  // console.log(setContador);

  return <>
    <h1>Valor contador: {contador}</h1>
  </>;
};

export default App;
