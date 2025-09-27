import { useState, useEffect } from "react";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  useEffect(() => {
    console.log("La lista de tareas cambió");
  }, [tareas]);

  const AgregarTarea = () => {
    setTareas([
      ...tareas, // Agrega un registro nuevo
      { id: tareas.length + 1, texto: nuevaTarea, completada: false }, //Modifica el registro agregado
    ]);
    setNuevaTarea("");
  };

  const taskCompleted = (id, checked) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completada: checked } : t))
    );
  };

  return (
    <>
      <h1>Lista de tareas</h1>
      <label>Tarea: </label>
      <input type="text" onChange={(e) => setNuevaTarea(e.target.value)} />
      <button onClick={AgregarTarea}> Guardar </button>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={(e) => taskCompleted(tarea.id, e.target.checked)}
            ></input>
            {tarea.texto} {tarea.completada ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListaTareas;
