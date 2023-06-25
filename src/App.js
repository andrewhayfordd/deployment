import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Cont from './Components/Contact/Cont';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
        <Route exact path="/cont" element={<Cont/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
