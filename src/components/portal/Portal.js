import React, { useEffect, useState } from "react";
import {Switch, Route, useHistory} from 'react-router-dom';
import Summary from "../summary/Summary";
import Orders from "../orders/Orders";
import PortalHeader from "./portalHeader/PortalHeader";
import request from 'axios';

const Portal = ({account, products, categories}) => {
  const [accountInfo, setAccountInfo] = useState({});
  const history = useHistory();
  
  useEffect(() => {
    console.log("Getting account information");
    setAccountInfo({account, balance: Math.floor(Math.random() * 20), dueDate: "December 20th 2020"});
    if(history.location.pathname === "/"){
      history.push('/summary');
    }
    
  }, [account]);
  
  return ( <div className='portal'>
    <h4 className='logout'><a>Logout</a></h4>
    <PortalHeader/>
    <Switch>
      <Route path={'/summary'}>
        <Summary account={account} accountInfo={accountInfo}/>
      </Route>
      <Route path={'/order'}>
        <Orders products={products} categories={categories} account={account} />
      </Route>
    </Switch>
    
    </div> );
};

export default Portal;
