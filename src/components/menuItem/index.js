import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({to, name, handleClick = null, ...props}) => {
  
  const click = () => {
    if (handleClick){
      handleClick(name);
    }
  }
  
  return ( <li key={name} onClick={click}>
      <NavLink {...props} activeClassName={'selected'} to={to}>{name}</NavLink>
    </li> );
};

export default MenuItem;
