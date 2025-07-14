import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <div className="content">
      <h2>🔐 Login</h2>
      <p>Please log in to continue.</p>
      <button className="button" onClick={login}>Sign In</button>
    </div>
  );
}
