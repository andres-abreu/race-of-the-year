import React from "react";
import { Link } from "react-router-dom";

function Logo() {

return(
    <Link to="/" className="link">
        <div className="text-center logo-container">
            <img src='/images/marathon.png' alt="logo" className="logoImg"/>
            <h1 className="navbar-brand">RACE OF THE YEAR </h1>
        </div>
    </Link>
    

)
}

    export default Logo; 