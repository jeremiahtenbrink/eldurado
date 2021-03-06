import React, { useEffect, useState } from "react";
import {Switch, Route, useHistory} from 'react-router-dom';
import Summary from "../summary/Summary";
import Orders from "../orders/Orders";
import PortalHeader from "./portalHeader/PortalHeader"
import Actions from "../actions/Actions";
import EmergencyOrder from "../emergencyOrder";
import EquipmentWorkOrder from "../equipmentWorkOrder";
import Faq from "../faq";
import Delivery from "../delivery";
import Settings from "../settings";
import ContactUs from "../contactUs";
import UpgradeMyEquipment from "../upgradeMyEquipment";
import ProductListing from "../productListing";

const Portal = ({account, products, categories, logout}) => {
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
    <h4 onClick={logout} className='logout'><a>Logout</a></h4>
    <PortalHeader/>
    <Switch>
      <Route path={'/emergency-order'}>
        <EmergencyOrder account={account} />
      </Route>
      <Route path={'/equipment-work-order'}>
        <EquipmentWorkOrder account={account} />
      </Route>
      <Route path={'/upgrade-my-equipment'}>
        <UpgradeMyEquipment />
      </Route>
      <Route path={'/product-listing'}>
        <ProductListing />
      </Route>
      <Route path={'/summary'}>
        <Summary account={account} accountInfo={accountInfo}/>
      </Route>
      <Route path={'/order'}>
        <Orders products={products} categories={categories} account={account} />
      </Route>
      <Route path={'/delivery'}>
        <Delivery />
      </Route>
      <Route path={'/faq'}>
        <Faq />
      </Route>
      <Route path={'/settings'}>
        <Settings />
      </Route>
      <Route path={'/contact-us'}>
        <ContactUs />
      </Route>
    </Switch>
    <Actions addClass={'phone'} />
    </div> );
};

export default Portal;
