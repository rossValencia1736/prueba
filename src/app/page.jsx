import estilo from "./Inicio.module.css";

export const runtime = "edge";

async function getUsuarios() {
  const consulta = await fetch("https://api.escuelajs.co/api/v1/users");
  const respuesta = await consulta.json();

  if (respuesta.length > 0) {
    return respuesta;
  }

  return null;
}

async function Inicio() {
  const usuarios = await getUsuarios();

  return (
    <div className={estilo.inicio}>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer componente</p>

      <br />

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;
