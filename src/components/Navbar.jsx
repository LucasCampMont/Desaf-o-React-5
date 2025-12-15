import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#f8f8f8" }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <button onClick={() => navigate("/cart")}>
        🛒 Total: $0
      </button>
    </nav>
  );
}
