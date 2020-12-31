import React from "react";

const Order = ({order, prod}) => {
  
  return ( <div className="order">
    <img src={prod.PROD_IMG}/>
    <div className="name-des">
      <h4>{prod.PROD_TITLE}</h4>
      <p>{prod.PROD_QTYDESC}</p>
    </div>
    <h4>{order.number}</h4>
    </div> );
};

export default Order;
