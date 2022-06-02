import React from 'react';
import Clock from '../components/Clock';
import Footer from '../components/Footer';
const Home = () => {

    return (
        <>
        
        <Clock/>

        <div className="card text-center">

            <section>
                <div className="card mb-3"><div className="card-header text-center text-danger"></div>
                <br></br>
                    <h5 className="card-title">SUMMER RUNNING TIPS</h5>
                    <img src="images/summer-running.jpg" alt="woman running in the afternoon" className="card-img-top"/>
                    <div className="card-body">
            
                        <p className="card-text text-justify">
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
                <p className="card-text">
                    <small className="text-muted">Last updated June 1, 2022</small>
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

        <div className="card">
         <div className="card-header text-center text-danger">DISCALIMER</div>
         <div className="card-body">
         <blockquote className="blockquote mb-0 text-center">
         <img src="/images/firemyattorney.jpg" className="img-fluid"/>
          <p>
              <br></br>
         All participants in joinder with this run-marathon-contract are with the knowledge and acceptance of the Terms and Conditions.  
         Run of The Year Marathon will not be liable for any damages, accidents, weight-loss, smelly-clothes during the race and as-well-as mis-matched-shoes or mis-sized clothing from our online-store-orders.
          <br></br> 
         All participants will adhere to an arbitration in the event of a valid claim, please contact Shwarzt & Shwartz & Spielburger & Fries law-firm and ask for Sal. Have a great run! 
         </p>
         <footer className="blockquote-footer">The Race of The Year Team</footer>
         </blockquote>
     </div>
    </div>
    <Footer/>
        </>
            
    )
}


export default Home;