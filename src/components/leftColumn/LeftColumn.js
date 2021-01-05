import React from "react";
import Accounts from "../accounts/Accounts";
import Actions from "../actions/Actions";

const LeftColumn = ({clientInformation, setActiveAccount}) => {
  return ( <div className='left-column'>
    <Accounts clientInformation={clientInformation} setActiveAccount={setActiveAccount}/>
    <Actions addClass={'desktop'}/>
    </div> );
};

export default LeftColumn;
