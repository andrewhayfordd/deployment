import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import { IndexRouteObject } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Header/>
      <Hero/>
    <Footer/>
    </div>
  );
}

export default App;
