import { useEffect, useState } from "react";

//rafce
const App = () => {
  console.log("1. Yo estoy al inicio!!")
  const [contador1, setContador1] = useState(1);
  const [contador2, setContador2] = useState(1000);

  useEffect(() => {
    //escucha cambios de estado del componente y nuevos props
    //y cuando encuentre algun cambio se ejecuta de nuevo
    console.log("los useEffect se ejecutan depende del cambio de estado")
    console.log(`Cambio!!! ${contador1}`); 
  }, [contador1])

  useEffect(() => {
    console.log("4. Dentro de un useEffect!!")
    console.log(`Change!!! ${contador2}`); 
  }, [contador2])

  useEffect(() => {
    console.log("Yo solo me ejecuto al inicio!!");
    fetch("https://jsonplaceholder.typicode.com/posts")
    //respuesta.json me retorna una Promesa
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }, [])


  console.log("2. Yo estoy justo antes del return!!")
  return (
    <div>
      { console.log("3. Yo estoy dentro del JSX!!")}
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
