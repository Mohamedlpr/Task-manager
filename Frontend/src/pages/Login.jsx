import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonClick = () => {
    
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={buttonClick}>Login</button>
      <Link className="loginLink" to="/login">Don't have an account?</Link>
    </div>
  );
}

export default Login;
