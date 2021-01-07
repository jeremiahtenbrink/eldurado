import React from "react";
import { Route } from "react-router-dom/";
import OrderSummary from "./summary";
import OrderCalendar from "./orderCalendar";

const Orders = ({account, products, categories}) => {
  
  
  return ( <div className='orders'>
    <Route exact path={'/order'}>
      <OrderSummary account={account} products={products}/>
    </Route>
    <Route path={'/order/calendar'}>
      <OrderCalendar/>
    </Route>
    </div> );
};

export default Orders;
