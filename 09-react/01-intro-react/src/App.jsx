import Parrafo from "./components/Parrafo";

//el nombre del componente tiene que comenzar con Mayus, ej: App, Counter, Card
const App = () => {
  //el componente tiene que retornar algo de JSX (JSX, como algo muy parecido a HTML)
  const titulo = "Hola React!!!!!";

  //Solamente podemos retornar 01 elemento en el JSX
  return (
    // Fragment <></>
    <>
      {/* className y htmlFor son reemplazos para class y for respectivamente porque son identicos a palabras reservadas de JS */}
      <header className="title">Probando React!!!!!</header>
      <div>
        {/* Todo lo que pongamos entre llaves dentro de JSX es JS */}
        {titulo}
        {10 * 50}
      </div>
      {/* Toda etiqueta tiene que tener su etiqueta de cierre o un autocierre /> */}
      <label htmlFor="input-name">Nombre completo</label>
      <input type="text" placeholder="Ingrese su nombre" id="input-name" />
      <hr />
      <Parrafo texto="JSX me agrada" fecha="12/10" />
      <Parrafo texto="Los node_modules son muy grandes" fecha="18/08"/>
      <Parrafo texto="Angular es raro" fecha="05/09" />
    </>
  );
};

//el componente tiene que ser exportado de preferencia por default
export default App;
