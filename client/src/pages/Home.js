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
        <div class="card mb-3"><div class="card-header text-center text-danger"></div>
        <h5 class="card-title">SUMMER RUNNING TIPS</h5>
  <img src="images/summer-running.jpg" alt="woman running in the afternoon" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body">
    
    <p class="card-text text-justify">
      
          1. Run by effort, not pace.
          <br></br>
          2. Run when the termperature is the coolest. Early AM or late PM.
          <br></br>
          3. Hydrate before, during and after your run.
          <br></br>
          4. Try to run in the shade as much as possible.
          <br></br>
          5. Wear breathable, light clothing to keep cool.
      
    </p>
    <p class="card-text">
      <small class="text-muted">Last updated June 1, 2022</small>
    </p>
  </div>
</div>
        </section>


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