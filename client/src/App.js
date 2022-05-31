import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock/clock';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import './assets/css/shop.css'

import Home from './pages/Home'
import Nav from './components/Nav'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RunnerList from './components/RunnersList'
import Shop from './components/Shop'
import RaceMap from './components/RaceMap'
import { useState } from 'react';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})


function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
            <Nav />
            <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> 
              <Route path="/runnerList" element={<RunnerList />} />
              <Route path="/shop" element={<Shop />} /> 
              <Route path="/raceMap" element={<RaceMap />} />   
            </Routes>
          </Router>
      </ApolloProvider>   
  );
}


//Countdown Clock Function
function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("June 30,2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="Timer">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
