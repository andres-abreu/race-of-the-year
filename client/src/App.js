import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse.js';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './assets/css/shop.css'
import './assets/css/timer.css'
import './assets/css/login.css'
import './assets/css/footer.css'
import './assets/css/logo.css'

import Home from './pages/Home'
import Nav from './components/Nav'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RunnerList from './components/RunnersList'
import Shop from './components/Shop'
import RaceMap from './components/RaceMap'
import Logo from './components/Logo'
import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <Logo/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/runnerList" element={<RunnerList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/raceMap" element={<RaceMap />} />
        </Routes>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
}



export default App;
