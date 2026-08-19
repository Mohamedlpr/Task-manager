import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = () => {
    if (
      confirmPassword == password &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      console.log(email, password);
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <form className="signupContainer">
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
      <button onSubmit={submitHandler}>Sign up</button>
      <Link className="signupLink" to="/login">
        Already have an account?
      </Link>
    </form>
  );
}

export default Signup;
