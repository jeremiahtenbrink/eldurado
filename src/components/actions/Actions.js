import React from "react";
import { Link } from "react-router-dom";

const Actions = ({addClass}) => {
  
  return (
    <div className={`actions ${addClass}`}>
      <div className="top">
        <h3>I would like to:</h3>
      </div>
      <div className="bottom">
        <h4><Link to={'/equipment-work-order'} >Place an equipment work order</Link></h4>
        <h4><Link to={"/emergency-order"}>Place an emergency order</Link></h4>
        <h4><Link to={"/product-listing"}>View Product Listing</Link></h4>
        <h4><Link to={"/upgrade-my-equipment"}>Upgrade My Equipment</Link></h4>
        <h4><Link to={"/contact-us"}>Contact Us</Link></h4>
        <h4><Link to={"/settings"}>Settings</Link></h4>
      </div>
    </div> );
};

export default Actions;
