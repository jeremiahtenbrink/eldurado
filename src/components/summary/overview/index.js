import React from "react";
import Line from "../../line";

const Overview = ({account, accountInfo}) => {
  
  return ( <div className='overview'>
    <h1>Account overview for {account}</h1>
    <Line>
      <h3>Balance</h3>
      <h3>Date</h3>
      <h3>Statement</h3>
      <h3>Payment</h3>
      <h3></h3>
    </Line>
    <Line>
      <h3>$212.28</h3>
      <h3>10/12/20</h3>
      <h3>$212.28</h3>
      <h3></h3>
      <h3>Download PDF</h3>
    </Line>
    <Line>
      <h3>-</h3>
      <h3>10/12/20</h3>
      <h3></h3>
      <h3>$212.28</h3>
      <h3>Download PDF</h3>
    </Line>
    <Line>
      <h3>$212.28</h3>
      <h3>10/12/20</h3>
      <h3>$212.28</h3>
      <h3></h3>
      <h3>Download PDF</h3>
    </Line>
    <Line>
      <h3>-</h3>
      <h3>10/12/20</h3>
      <h3></h3>
      <h3>$212.28</h3>
      <h3>Download PDF</h3>
    </Line>
    <Line>
      <h3>$212.28</h3>
      <h3>10/12/20</h3>
      <h3>$212.28</h3>
      <h3></h3>
      <h3>Download PDF</h3>
    </Line>
    <Line>
      <h3>-</h3>
      <h3>10/12/20</h3>
      <h3></h3>
      <h3>$212.28</h3>
      <h3>Download PDF</h3>
    </Line>
    </div> );
};

export default Overview;
