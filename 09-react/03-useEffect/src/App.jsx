import { useEffect, useState } from "react";

//rafce
const App = () => {
  const [contador1, setContador1] = useState(1);
  const [contador2, setContador2] = useState(1000);

  useEffect(() => {
    //escucha cambios de estado del componente y nuevos props
    //y cuando encuentre algun cambio se ejecuta de nuevo
    console.log("-----------")
    console.log(`Cambio!!! ${contador1}`); 
  })

  return (
    <div>
      <hr />
      <h3>Contador1: {contador1}</h3>
      <button
        onClick={() => {
          setContador1(contador1 + 1);
        }}
      >
        Incrementar Contador 1
      </button>
      <hr/>
      <h3>Contador2: {contador2}</h3>
      <button
        onClick={() => {
          setContador2(contador2 + 100);
        }}
      >
        Incrementar Contador2
      </button>
    </div>
  );
};

export default App;
