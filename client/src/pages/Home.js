import React from 'react';


const Home = () => {
    return (
        <>
        <section classNameName="">
            <div classNameName="container d-flex flex-column">
                <h1 classNameName="text-center ">Welcome to the race of the year</h1>
                <p>"Life is short. Running make it seem longer." by Baron Hansen</p>  
            </div>
            <video autoPlay loop muted>
                <source src="images/runners.mp4" type="video/mp4"></source>
            </video>
        </section>
        </>
    )
}


export default Home;