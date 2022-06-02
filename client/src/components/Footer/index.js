import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Footer =()=>{
    return (
        <footer className="bg-dark text-center text-white">
  
  <div className="container p-4 pb-0">
    
    <section className="mb-4">
      <p className="something">
          Thank You for Visiting!
          <br></br>
          This race was brought to you by: 
          
            Andres Abreu,
            
            Tiffany Landon,
            
            Maria Andrea Rodriguez,
            
            William Piñero
          </p>
    </section>
  </div>
  <div className="text-center p-3" >
    © 2022 Copyright The Race Of f The Year

  </div>
  
</footer>

    )
}
export default Footer