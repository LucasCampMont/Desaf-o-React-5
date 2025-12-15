const Login = () => {
  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h1>Iniciar Sesión</h1>

      <form
        style={{
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px"
        }}
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            background: "black",
            color: "white",
            borderRadius: "6px"
          }}
        >
          Ingresar
        </button>
      </form>
    </section>
  );
};

export default Login;
