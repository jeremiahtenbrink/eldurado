import React, { useEffect, useState } from "react";
import { useSession } from 'react-use-session';
import Login from "../../views/Login";
import Main from "../../views/Main";

const IsLoggedIn = ({clientInfo, logout, setLogin}) => {
  
  if(clientInfo){
    return <Main logout={logout} clientInfo={clientInfo} />
  }else {
    return <Login setLogin={setLogin}/>
  }
  
};

export default IsLoggedIn;
