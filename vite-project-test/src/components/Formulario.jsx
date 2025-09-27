import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  console.log(nombre, email);

  return (
    <form>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}
export default Formulario;
