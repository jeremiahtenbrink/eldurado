import React from "react";

const Actions = ({addClass}) => {
  
  return (
    <div className={`actions ${addClass}`}>
      <div className="top">
        <h3>I would like to:</h3>
      </div>
      <div className="bottom">
        <h4>Place an equipment work order</h4>
        <h4>Place an emergency order</h4>
        <h4>View Product listing</h4>
        <h4>Upgrade my equipment</h4>
        <h4>Contact us</h4>
        <h4>Account Settings</h4>
      </div>
    </div> );
};

export default Actions;
