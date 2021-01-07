import React from "react";
import MenuItem from "../components/menuItem";

/**
 * @typedef {hook} UseMenu
 * @param {function} click
 * @return {{accountSummary: Menu, standingOrder: Menu, nextDelivery: Menu}}
 */
export const useMenu = (click) => {
  
  /**
   * @type {Menu}
   */
  const accountSummary =
    [<MenuItem  handleClick={click} key={"Overview"} exact to={'/summary'} name={"Overview"}/>,
      <MenuItem handleClick={click} key={"Invoice History"} exact to={'/summary/invoice'} name={"Invoice History"}/>,
      <MenuItem handleClick={click} key={"Payment History"} exact to={'/summary/history'} name={"Payment History"}/>,
      <MenuItem handleClick={click} key={"Statement History"} exact to={'/summary/statement'} name={"Statement History"}/>,
      <MenuItem handleClick={click} key={"Make a Payment"} exact to={'/summary/payment'} name={"Make" +
      " a Payment"}/>];
  
  /**
   * @type {Menu}
   */
  const standingOrder =
    [<MenuItem handleClick={click} to={'/order'} exact name={"Summary"}/>,
      <MenuItem handleClick={click} to={'/order/calendar'} exact name={"Print" +
      " Calendar"}/>];
  
  /**
   * @type {Menu}
   */
  const nextDelivery =
    [<MenuItem handleClick={click} to={'/delivery'} exact name={"Summary"} />,
      <MenuItem handleClick={click} to={'/delivery/calendar'} exact name={"Print" +
      " Calendar"} />];
  
  /**
   * @type {Menu}
   */
  const faqs = [ <h4 className='info'>Extinguish your burning questions with these refreshing answers.</h4>]
  
  return {accountSummary, standingOrder, nextDelivery, faqs}
  
}


/**
 * @typedef {React.Component[]} Menu
 */
