import React, { useEffect, useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Header from "./components/header/Header";
import IsLoggedIn from "./components/isLoggedIn/IsLoggedIn";
import { useSession } from "react-use-session";

function App() {
  
  const {session, save, clear} = useSession("Eldurado");
  const [clientInfo, setClientInfo] = useState(false);
  
  useEffect(() => {
    
    if(session){
      setClientInfo(session);
    }
  }, []);
  
  /**
   * @typedef {function} SetLogin
   * @param client
   */
  const setLogin = (client) => {
    
    setClientInfo(client);
    save(client);
  }
  
  /**
   * @type {function} logout
   */
  const logout = () => {
    clear();
    setClientInfo(false);
  }
  
  return (
    <Router basename={'/portal2021'}>
    <Header logout={logout}/>
    <IsLoggedIn logout={logout} setLogin={setLogin} clientInfo={clientInfo} />
    </Router>
  );
}

export default App;
