import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const buttonClick = () => {
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
    <div className="signupContainer">
      <h1>Sign up</h1>
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
        placeholder="Choose password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
      />
      <button onClick={buttonClick}>Sign up</button>
      <Link className="signupLink" to="/login">Already have an account?</Link>
    </div>
  );
}

export default Signup;
