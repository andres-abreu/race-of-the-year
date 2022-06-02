import React from 'react'
import Clock from '../Clock'

const RaceMap = () => {
    return (
        <>
        <div className=" container flex-column">
            <img src="/images/raceMap.png" className="img-fluid p-3" alt="raceMap"></img>
        </div>   
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="/images/startrace.jpeg"className="card-img-top p-3" alt="Race starting point"/>
      <div className="card-body">
        <h5 className="card-title">Schedule</h5>
        <p className="card-text">
            <ul>
        <li>5:00 a.m.: Start line access.</li>
        <li>5:45 a.m.: Opening ceremony.</li>
        <li>5:55 a.m:. Challenged Athletes start.</li>
        <li>6:00 a.m.: Race of The Year Marathon runners start.</li>
            </ul>
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="images/registration.jpg" className="card-img-top p-3" alt="Registration form"/>
      <div className="card-body">
        <h5 className="card-title">Registration Prices</h5>
        <p className="card-text">
        <ul>
        <li>Pre-Registration: $150 adults over 18 years.</li>
        <li>Pre-Registration: $75 adults over 65 years.</li>
        <li>Same-Day Registration: $200 adults over 18 years.</li>
        <li>Same-Day Registration: $100 adults over 65 years.</li>
            </ul>          
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="images/communitypark.jpeg" className="card-img-top p-3" alt="Marathon, Fl Community Park"/>
      <div className="card-body">
        <h5 className="card-title">Packet Pickup</h5>
        <p className="card-text">
        <ul>
        Pickup Time:
        <li>Friday July 1st, 2022 - 10 a.m. to 7 p.m.</li>
       Pickup Location: Marathon Community Park
        <li>Address: 200 Ocean, 36th St, Marathon, FL 33050</li>
            </ul>   
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="images/covid-update.jpeg" className="card-img-top p-3" alt="covid-19 update"/>
      <div className="card-body">
        <h5 className="card-title">Covid-19 Updates</h5>
        <p className="card-text">
        We expect to host our event without issue & can’t wait to have you run with us. 
        <br></br>
        However, if you have tested positive for Covid-19 the day of the race, please stay home.
        <br></br>
        <br></br>
        No refunds will be returned.
        </p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default RaceMap