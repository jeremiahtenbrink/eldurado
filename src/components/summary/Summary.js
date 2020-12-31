import React from "react";

const Summary = ({account, accountInfo}) => {
  return ( <div>
    <h1>Account Summary</h1>
    <h1>Account: {account}</h1>
    <h2>Balance: {accountInfo.balance}$</h2>
    <h2>Due: {accountInfo.dueDate}</h2>
    </div> );
};

export default Summary;
