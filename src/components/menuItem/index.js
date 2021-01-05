import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({to, name, handleClick = null}) => {
  
  const click = () => {
    if (handleClick){
      handleClick(name);
    }
  }
  
  return ( <li key={name} onClick={click}>
      <NavLink activeClassName={'selected'} to={to}>{name}</NavLink>
    </li> );
};

export default MenuItem;
