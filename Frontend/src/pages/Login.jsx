import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const inputs = {
      email: email,
      password: password
    }
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(inputs)
    })
    const data = await res.json()
    localStorage.setItem("token", data.token);
    navigate("/");
  };
  

  return (
    <form onSubmit={submitHandler} className="loginContainer">
      <h1>Login</h1>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Login</button>
      <Link className="loginLink" to="/signup">
        Don't have an account?
      </Link>
    </form>
  );
}

export default Login;
