import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {}

  return (
    <form className="loginContainer">
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
      <button onSubmit={buttonClick}>Login</button>
      <Link className="loginLink" to="/login">
        Don't have an account?
      </Link>
    </form>
  );
}

export default Login;
