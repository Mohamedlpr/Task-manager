import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      confirmPassword === password &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      const data = {
        email: email,
        password: password,
      };
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res);
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <form onSubmit={submitHandler} className="signupContainer">
      <h1>Sign up</h1>
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
        placeholder="Choose password"
      />
      <input
        required
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
      />
      <button type="submit">Sign up</button>
      <Link className="signupLink" to="/login">
        Already have an account?
      </Link>
    </form>
  );
}

export default Signup;
