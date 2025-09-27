import { useState, useEffect } from "react";

function ContadorConEfecto() {
  const [cuenta, setCuenta] = useState(0);

  // Efecto que se ejecuta después de cada render
  useEffect(() => {
    document.title = `Cuenta: ${cuenta}`;
  });

  // Efecto que se ejecuta solo una vez (al montar)
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  // Efecto que se ejecuta cuando cambia 'cuenta'
  useEffect(() => {
    console.log(`La cuenta cambió a: ${cuenta}`);
  }, [cuenta]);

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}
export default ContadorConEfecto;
