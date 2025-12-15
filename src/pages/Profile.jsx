export default function Profile() {
  const email = "usuario@example.com"; // estático por ahora

  return (
    <div style={{ padding: "20px" }}>
      <h1>Perfil</h1>
      <p>Email: {email}</p>
      <button>Cerrar sesión</button>
    </div>
  );
}
