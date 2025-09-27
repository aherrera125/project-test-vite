import { useState, useEffect } from "react";

function PerfilUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: "María García",
    edad: 28,
    profesion: "Desarrolladora Frontend",
    seguidores: 150,
  });

  // Efecto que se ejecuta cuando cambian los seguidores
  useEffect(() => {
    console.log(`Nuevo total de seguidores: ${usuario.seguidores}`);
  }, [usuario.seguidores]);

  const agregarSeguidor = () => {
    setUsuario({
      ...usuario,
      seguidores: usuario.seguidores + 1,
    });
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>🧑‍💻 {usuario.nombre}</h2>
      <p>📅 Edad: {usuario.edad} años</p>
      <p>💼 Profesión: {usuario.profesion}</p>
      <p>👥 Seguidores: {usuario.seguidores}</p>

      <button onClick={agregarSeguidor}>➕ Agregar Seguidor</button>
    </div>
  );
}

export default PerfilUsuario;
