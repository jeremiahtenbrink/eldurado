import React, { useEffect, useState } from "react";
import Order from "../order/Order";

const OrderSummary = ({account, products}) => {
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    console.log("getting next order");
    setOrders([{product_id: 126, number: 10}, {product_id: 30, number: 2}, {product_id: 22, number: 6},
      {product_id: 112, number: 10}, {product_id: 100, number: 2}, {product_id: 2, number: 6}])
  }, [account]);
  
  return ( <div>
    <div className="orders-header">
      <h5>Product</h5>
      <h5>Quantity</h5>
    </div>
    {products.map(product => {
      let order = orders.find(order => order.product_id === product.PROD_ID);
      if(order){
        return (
          <Order key={product.PROD_ID} order={order} prod={product} />
        )
      }
    
    })}
    <div className="bottom-text">
      <h4>Add/Change Items</h4>
      <h4>Skip Delivery</h4>
    </div>
    </div> );
};

export default OrderSummary;
