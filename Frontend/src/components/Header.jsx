import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navWrapper">
      <header className="nav">
        <img src="/favicon.png" alt="Task Manger Logo" />
        <div className="navContainer">
          <Link className="navItems" to="/">
            Home
          </Link>
          <Link className="navItems" to="/counter">
            Counter
          </Link>
          <Link className="navItems" to="/about">
            About US
          </Link>
        </div>
        <div className="auth">
          <button id="login"><span className="loginSpan">Login</span></button>
          <button id="signup"><span className="signupSpan">Sign up</span></button>
        </div>
      </header>
    </div>
  );
}

export default Header;
