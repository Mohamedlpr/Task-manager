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
      </header>
    </div>
  );
}

export default Header;
