const Register = () => {
  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h1>Registro</h1>

      <form
        style={{
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px"
        }}
      >
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Repetir contraseña" />

        <button style={{ padding: "10px", cursor: "pointer" }}>
          Crear Cuenta
        </button>
      </form>
    </section>
  );
};

export default Register;
