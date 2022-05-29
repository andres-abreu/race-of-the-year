import React from "react";
import Auth from "../../utils/auth"
import { Link } from "react-router-dom";

function Nav() {

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
                Signup
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        );
      }
    }
  
    return (
      <header className="flex-row px-1">
        <h1>
          <Link to="/">
            <h1>The race of the year</h1>
          </Link>
        </h1>
  
        <nav>
          {showNavigation()}
        </nav>
      </header>
    );
  }
  
  export default Nav;
  
