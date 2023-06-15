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
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/home' element={<Hero/>} />
        </Routes>
      </BrowserRouter>
      <Hero/>
    <Footer/>
    </div>
  );
}

export default App;
