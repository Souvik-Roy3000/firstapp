import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Route  exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </div>
  )
}

export default App
