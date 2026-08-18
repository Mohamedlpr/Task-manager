import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="nav">
      <img src="/favicon.png" alt="Task Manger Logo" />
      <div className="navContainer">
        <Link className="navItems animate__bounceInDown" to="/">
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
  );
}

export default Header;
