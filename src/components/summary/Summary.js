import React from "react";
import {Route} from "react-router-dom";
import Overview from "./overview";
import InvoiceHisotry from "./invoide";
import PaymentHistory from "./paymentHistory";
import StatementHistory from "./statementHistory";
import MakeAPayment from "./makeAPayment";

const Summary = ({account, accountInfo}) => {
  return ( <div className="summary">
    <Route exact path={'/summary'}>
      <Overview account={account} accountInfo={accountInfo} />
    </Route>
    <Route path={'/summary/invoice'}>
      <InvoiceHisotry />
    </Route>
    <Route path={'/summary/history'}>
      <PaymentHistory />
    </Route>
    <Route path={'/summary/statement'}>
      <StatementHistory />
    </Route>
    <Route path={'/summary/payment'}>
      <MakeAPayment />
    </Route>
    </div> );
};

export default Summary;
