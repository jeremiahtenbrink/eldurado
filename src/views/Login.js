import React from "react";
import { useState } from "react-use-session";

const Login = ({setLogin}) => {
  
  const [info, setInfo] = useState({});
  
  return ( <div className="login">
    <h1>Please login to continue to the portal.</h1>
    <form className="login-form">
      <input type='username' />
    </form>
    </div> );
};

export default Login;
