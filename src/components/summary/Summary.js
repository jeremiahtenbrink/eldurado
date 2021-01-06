import React from "react";
import {Route} from "react-router-dom";
import Overview from "./overview";

const Summary = ({account, accountInfo}) => {
  return ( <div className="summary">
    <Route path={'/summary/overview'}>
      <Overview account={account} accountInfo={accountInfo} />
    </Route>
    </div> );
};

export default Summary;
