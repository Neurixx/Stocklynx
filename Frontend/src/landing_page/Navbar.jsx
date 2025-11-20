import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm d-flex"
      style={{ backgroundColor: "white" }}
    >
      <div className="container row">
        <Link className="navbar-brand col-lg-4" to="/">
          <img className="logoImg" src="assets/logo.svg" alt="Zerodha" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-lg-6" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
