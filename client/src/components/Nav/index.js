import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar navbar-expand-lg m-0 main-nav">
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="/"
                  onClick={() => Auth.logout()}
                  className="nav-link sr-only sr-only-focusable"
                  ActiveclassName="active"
                >
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/runnerList"
                  className="nav-link sr-only sr-only-focusable"
                  ActiveclassName="active"
                >
                  Runners
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/shop"
                  className="nav-link sr-only sr-only-focusable"
                  ActiveclassName="active"
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/raceMap"
                  className="nav-link sr-only sr-only-focusable"
                  ActiveclassName="active"
                >
                  Race Information
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg">
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/signup"
                    className="nav-link sr-only sr-only-focusable"
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/login"
                    className="nav-link sr-only sr-only-focusable"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span className="sr-only">{showNavigation()}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
