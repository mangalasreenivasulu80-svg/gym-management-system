import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-brand">
        <div className="brand-icon">🏋️</div>

        <div className="brand-text">
          <h2>Gym</h2>
          <span>Management System</span>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/services">
          Services
        </NavLink>

        <NavLink to="/gallery">
          Gallery
        </NavLink>

        <NavLink to="/clients">
          Clients
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>

      <div className="nav-buttons">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/register" className="register-btn">
          Register
        </NavLink>
      </div>

    </header>
  );
}

export default Navbar;