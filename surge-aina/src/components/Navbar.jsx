import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">Surge Aina</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="hamburger" aria-label="Menu">
        ☰
      </button>
    </header>
  );
}
