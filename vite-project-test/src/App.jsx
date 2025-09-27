import { useState } from "react";
import "./App.css";

import Formulario from "./components/Formulario";
import ContadorConEfecto from "./components/ContadorConEffect";
import PerfilUsuario from "./components/PerfilUsuario";

import ListaTareas from "./components/ListaTareas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ListaTareas></ListaTareas>
      {/*<Formulario></Formulario>
      <ContadorConEfecto></ContadorConEfecto>
      <PerfilUsuario></PerfilUsuario>*/}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
