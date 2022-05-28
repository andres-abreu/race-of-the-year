import React from 'react';

const Home = () => {
    return (
        <main>
            <div className="container">
                <h1 className="text-center viewport-header">Welcome to the race of the year</h1>
                <p>"life is short. Running make it seem longer." by Baron Hansen</p>
                <video autoPlay loop muted id='video'>
                    <source src="/images/runners.mp4" type='video/mp4' />
                </video>
            </div>
        </main>
    )
}


export default Home;