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
    [<MenuItem handleClick={click} key={"Overview"} to={'/summary/overview'} name={"Overview"}/>,
      <MenuItem handleClick={click} key={"Invoice History"} to={'/summary/invoice'} name={"Invoice History"}/>,
      <MenuItem handleClick={click} key={"Payment History"} to={'/summary/payment'} name={"Payment History"}/>,
      <MenuItem handleClick={click} key={"Statement History"} to={'/summary/statement'} name={"Statement History"}/>,
      <MenuItem handleClick={click} key={"Make a Payment"} to={'/summary/payment'} name={"Make" +
      " a Payment"}/>];
  
  /**
   * @type {Menu}
   */
  const standingOrder =
    [<MenuItem handleClick={click} to={'/order/summary'} name={"Summary"}/>,
      <MenuItem handleClick={click} to={'/order/calendar'} name={"Print Calendar"}/>];
  
  /**
   * @type {Menu}
   */
  const nextDelivery =
    [<MenuItem handleClick={click} to={'/delivery/summary'} name={"Summary"} />,
      <MenuItem handleClick={click} to={'/delivery/summary'} name={"Print Calendar"} />];
  
  /**
   * @type {Menu}
   */
  const faqs = [<MenuItem handleClick={click} to={'/faq'} name={"Extinguish" +
  " your burning questions with these refreshing answers."} ></MenuItem>]
  
  return {accountSummary, standingOrder, nextDelivery, faqs}
  
}


/**
 * @typedef {React.Component[]} Menu
 */
