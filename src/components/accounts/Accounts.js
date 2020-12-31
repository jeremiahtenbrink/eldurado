import React from "react";

const Accounts = ({clientInformation, setActiveAccount}) => {
  
  return (
    <div className='accounts'>
      <h2>Welcome {clientInformation.clientName}</h2>
      <h3 className='email'>{clientInformation.email}</h3>
      <h3>Switch Accounts</h3>
      {clientInformation.accounts.map(account => {
        return (<h4 onClick={() => setActiveAccount(account)} className='accounts-numbers'>{account}</h4>)
      })}
    </div>
  );
};

export default Accounts;
