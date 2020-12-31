import React from "react";
import Accounts from "../accounts/Accounts";
import Actions from "../actions/Actions";

const LeftColumn = ({clientInformation, setActiveAccount}) => {
  return ( <div className='left-column'>
    <Accounts clientInformation={clientInformation} setActiveAccount={setActiveAccount}/>
    <h3>I would like to:</h3>
    <Actions/>
    </div> );
};

export default LeftColumn;
