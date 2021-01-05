import React from "react";
import DropDown from "./dropDown";

const Accounts = ({clientInformation, setActiveAccount}) => {
  
  return (
    <div className='accounts'>
      <h2>Welcome {clientInformation.clientName}</h2>
      <h3 className='email'>{clientInformation.email}</h3>
      { clientInformation.accounts.length > 0 &&
        <DropDown name={ "My Accounts" } click={ setActiveAccount }
                list={ clientInformation.accounts }/>
      }
    </div>
  );
};

export default Accounts;
