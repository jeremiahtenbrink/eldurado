import React from "react";
import {Route} from 'react-router-dom';
import DeliverySummary from "./summary";
import DeliveryCalendar from "./calendar";

const Delivery = () => {
  return ( <div className="delivery">
    <Route exact path={'/delivery'}>
      <DeliverySummary />
    </Route>
    <Route path={'/delivery/calendar'}>
      <DeliveryCalendar/>
    </Route>
    </div> );
};

export default Delivery;
