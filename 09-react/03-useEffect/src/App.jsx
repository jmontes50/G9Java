import { useEffect, useState } from "react";

//rafce
const App = () => {
  const [contador1, setContador1] = useState(1);

  return (
    <div>
      <h1>App</h1>
      <hr />
      <h3>Contador1: {contador1}</h3>
      <button
        onClick={() => {
          setContador1(contador1 + 1);
        }}
      >
        Incrementar Contador 1
      </button>
    </div>
  );
};

export default App;
