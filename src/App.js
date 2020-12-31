import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Header from "./components/header/Header";
import IsLoggedIn from "./components/isLoggedIn/IsLoggedIn";

function App() {
  
  return (
    <Router>
    <Header/>
    <IsLoggedIn />
    </Router>
  );
}

export default App;
