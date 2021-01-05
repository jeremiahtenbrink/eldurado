import React from "react";
import MenuItem from "../components/menuItem";

export const useMenu = (click) => {
  
  const accountSummary =
    [<MenuItem handleClick={click} key={"Overview"} to={'/summary/overview'} name={"Overview"}/>,
      <MenuItem handleClick={click} key={"Invoice History"} to={'/summary/invoice'} name={"Invoice History"}/>,
      <MenuItem handleClick={click} key={"Payment History"} to={'/summary/payment'} name={"Payment History"}/>,
      <MenuItem handleClick={click} key={"Statement History"} to={'/summary/statement'} name={"Statement History"}/>,
      <MenuItem handleClick={click} key={"Make a Payment"} to={'/summary/payment'} name={"Make" +
      " a Payment"}/>];
  
  const standingOrder =
    [<MenuItem handleClick={click} to={'/order/summary'} name={"Summary"}/>,
      <MenuItem handleClick={click} to={'/order/calendar'} name={"Print Calendar"}/>];
  
  const nextDelivery =
    [<MenuItem handleClick={click} to={'/delivery/summary'} name={"Summary"} />,
      <MenuItem handleClick={click} to={'/delivery/summary'} name={"Print Calendar"} />];
  
  return {accountSummary, standingOrder, nextDelivery}
  
  
}
