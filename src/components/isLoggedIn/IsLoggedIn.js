import React, { useEffect, useState } from "react";
import { useSession } from 'react-use-session';
import Login from "../../views/Login";
import Main from "../../views/Main";

const IsLoggedIn = () => {
  const {session, save, clear} = useSession("Eldurado");
  const [clientInfo, setClientInfo] = useState(true);
  
  useEffect(() => {
    
    if(session){
      setClientInfo(session);
    }
  }, []);
  
  const setLogin = (client) => {
    setClientInfo(client);
    save(client);
  }
  
  if(clientInfo){
    return <Main clientInfo={clientInfo} />
  }else {
    return <Login setLogin={setLogin}/>
  }
  
};

export default IsLoggedIn;
