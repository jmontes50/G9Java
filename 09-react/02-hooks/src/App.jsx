import { useState } from "react";
import Validator from "./components/Validator";
import Button from "./components/Button";

//Al cambiar un estado o recibir nuevos props en un componente, hará que este se vuelva a renderizar, pero con la información actualizada
const App = () => {
  //const [estado, funcActualizaElEstado] = useState(valor_inicial) number, string, boolean, arrays, objects, null
  const [contador, setContador] = useState(1);
  // console.log(setContador);
  const incremento = () => {
    console.log("ejecutando incremento!!!");
    setContador(contador + 1);
    // contador = contador + 1;
  }

  return (
    <>
      <h1>Valor contador: {contador}</h1>
      <hr />
      <button onClick={incremento}>
        Incrementar
      </button>
      <hr />
      <Button counter={contador} setCounter={setContador}/>
      <hr />
      <Validator counter={contador} />
      {/* renderizado condicional */}
      {/* <h2>
        {contador > 10 ? "Es demasiado!!!" : "Aún falta!"}
      </h2> */}
    </>
  );
};

export default App;
