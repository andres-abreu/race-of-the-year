import React from "react";
import Auth from "../../utils/auth"
import { Link } from "react-router-dom";

function Nav() {

<<<<<<< HEAD
    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
            <li className="mx-1">
              <Link to="/runnerList">
                Runners
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/shop">
                Shop
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/raceMap">
                Race Map
              </Link>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/signup">
=======
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="collapse navbar-collapse navbar-expand-lg" id="navbarSupportedContent">
          <li className="nav-item nav-link active">
            <a style={{ textDecoration: 'none' , color:'white'}} href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="nav-item nav-link active">
            <Link style={{ textDecoration: 'none' }} to="/runnerList" className="link">
              Runners
            </Link>
          </li>
          <li className="nav-item nav-link active">
            <Link style={{ textDecoration: 'none' }} to="/shop" className="link">
              Shop
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link active">
              <Link style={{ textDecoration: 'none' }} to="/signup" className="link">
>>>>>>> 517a52242b413cc4c71e3a3d9a194262aae85dec
                Signup
              </Link>
            </li>
            <li className="nav-item nav-link active">
              <Link style={{ textDecoration: 'none' }} to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="nav-item nav-link active">
              <Link style={{ textDecoration:'none'}} to="/Store" className="link">
                Store
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav className="navbar navbar-expand-md navbar-light nav-item active">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {showNavigation()}
        </div>
        <div>
        <h1 className="navbar-brand ml-auto">
          <Link style={{ textDecoration:'none'}} to="/">
            <h1 className="Header">The race of the year</h1>
          </Link>
        </h1>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

