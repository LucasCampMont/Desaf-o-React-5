import { Link } from "react-router-dom";

export default function NotFound() {
    return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Oops... esta pizza no existe 🍕❌</p>

      <Link to="/">Volver al Home</Link>
    </div>
  );
}

