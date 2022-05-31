import React from "react";
import Auth from "../../utils/auth"
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar-collapse">
          <div className="container">
            <div className=" navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav fixed-top mr-auto">
                <li className="nav-item nav-link">
                  <a style={{ textDecoration: 'none', color: 'black' }} href="/" onClick={() => Auth.logout()} className="nav-link">
                    Logout
                  </a>
                </li>
                <li className="nav-item nav-link">
                  <Link style={{ textDecoration: 'none' }} to="/runnerList" className="nav-link">
                    Runners
                  </Link>
                </li>
                <li className="nav-item nav-link active">
                  <Link style={{ textDecoration: 'none' }} to="/shop" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item nav-link active">
                  <Link style={{ textDecoration: 'none' }} to="/raceMap" className="nav-link">
                    Race Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar-collapsed">
          <div className="navbar-collapse fixed-top" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item nav-link active">
                <Link style={{ textDecoration: 'none' }} to="/signup" className="link">
                  Signup
                </Link>
              </li>
              <li className="nav-item nav-link active">
                <Link style={{ textDecoration: 'none' }} to="/login" className="link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }


  return (
      <nav className="navbar navbar-expand-md navbar-light nav-item active">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {showNavigation()}
        </div>
        <div>
        <h1 className="navbar-brand ml-auto">
          <Link style={{ textDecoration:'none'}} to="/">
            <h1 className="Header">RACE OF THE YEAR</h1>
          </Link>
        </h1>
        </div>
    </nav>
  );
}

export default Nav;

