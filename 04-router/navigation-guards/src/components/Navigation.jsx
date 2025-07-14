// src/components/Navigation.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const isLoginPage = location.pathname === "/login";

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  if (isLoginPage) return null;

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {isAuthenticated && (
        <button 
          onClick={logout}
          style={{
            background: "none",
            border: "none",
            color: "#ff3b30",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}