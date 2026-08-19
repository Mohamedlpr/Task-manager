import { Link } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  return (
    <div className="navWrapper">
      <header className="nav">
        <img src="/favicon.png" alt="Task Manger Logo" />
        <div className="navContainer">
          <Link className="navItems removeDecoration" to="/">
            Home
          </Link>
          <Link className="navItems removeDecoration" to="/counter">
            Counter
          </Link>
          <Link className="navItems removeDecoration" to="/about">
            About US
          </Link>
        </div>
        <div className="auth">
          <Link className="removeDecoration" to="/login">
            <button id="login">
              <span className="loginSpan">Login</span>
            </button>
          </Link>
          <Link className="removeDecoration" to="/signup">
            <button id="signup">
              <span className="signupSpan">Sign up</span>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
