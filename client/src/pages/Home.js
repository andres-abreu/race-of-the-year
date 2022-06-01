import React from 'react';
import Clock from '../components/Clock';

const Home = () => {
    
    return (
    
        <>
        <Clock/>
        
        <section classNameName="">
            <div classNameName="container d-flex flex-column">
                <h1 classNameName="text-center "></h1>
                <p></p>  
            </div>
            <video autoPlay muted loop id="">
                <source src="public/images/runners.jpg" type=""></source>
            </video>
        </section>

        <div class="card text-center">
        <div class="card-header">
         </div>
        <div class="card-body">
         <h5 class="card-title">CONGRATULATION ON REGISTERING!</h5>
             <p class="card-text">Snag Your Official #RaceofTheYear Gear! 
              Commemorate your experience with official gear, anniversary swag, or prep for 2023 with In-Training apparel!.</p>
             <a href="#" class="btn btn-primary">Shop</a>
         </div>
        <section>
            <div>
                <p></p>
            </div>
        </section>

        </div>

        <div class="card">
         <div class="card-header text-center text-danger">DISCALIMER</div>
         <div class="card-body">
         <blockquote class="blockquote mb-0 text-center">
          <p>
         All participants in joinder with this run-marathon-contract are with the knowledge and acceptance of the Terms and Conditions.  
         Run of The Year Marathon will not be liable for any damages, accidents, weight-loss, smelly-clothes during the race and as-well-as mis-matched-shoes or mis-sized clothing from our online-store-orders.
          <br></br> 
         All participants will adhere to an arbitration in the event of a valid claim, please contact Shwarzt & Shwartz & Spielburger & Fries law-firm and ask for Sal. Have a great run! 
         </p>
         <footer class="blockquote-footer">The Race of The Year Team</footer>
         </blockquote>
     </div>
    </div>
        </>
    )
}


export default Home;