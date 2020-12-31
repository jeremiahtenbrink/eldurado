import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SubHeader from "../subHeader/SubHeader";

const PortalHeader = () => {
  const menus = {
    summary: [<li><Link to={'/summary/overview'}>Overview</Link></li>,
              <li><Link to={'/summary/invoice'}>Invoice History</Link></li>,
              <li><Link to={'/summary/payment'}>Payment History</Link></li>,
              <li><Link to={'/summary/statement'}>Statement History</Link></li>,
              <li><Link to={'/summary/payment'}>Make a Payment</Link></li> ],
    order: [<li><Link to={'/order/overview'}>Summary</Link></li>,
            <li><Link to={'/order/invoice'}>Print Calendar</Link></li>],
    delivery: [],
    faq: [],
    settings: []
  };
  const location = useLocation();
  
  const [subMenu, setSubMenu] = useState(menus.summary);
  
  useEffect(() => {
    
    const pathname = location.pathname;
    
    if(pathname.includes('summary')){
      setSubMenu(menus['summary']);
    }else if (pathname.includes('order')){
      setSubMenu(menus['order']);
    }else if (pathname.includes('delivery')){
      setSubMenu(menus['delivery']);
    }else if (pathname.includes('faq')){
      setSubMenu(menus['faw']);
    }else if (pathname.includes('settings')){
      setSubMenu(menus['settins']);
    }
    
  }, [])
  
  const changeSubMenu = (menuName) => {
    setSubMenu(menus[menuName]);
  }
  
  return ( <div className="portal-header">
    <nav>
      <ul className={'portal-nav'}>
        <li onClick={() => changeSubMenu('summary')}><NavLink activeClassName={'selected'} to={'/summary'} >Account Summary</NavLink></li>
        <li onClick={() => changeSubMenu('order')}><NavLink activeClassName={'selected'} to={'/order'}>Standing Order</NavLink></li>
        <li onClick={() => changeSubMenu('delivery')}><NavLink activeClassName={'selected'} to={'/delivery'}>Next Delivery</NavLink></li>
        <li onClick={() => changeSubMenu('faq')}><NavLink activeClassName={'selected'} to={'/faq'}>FAQ</NavLink></li>
        <li onClick={() => changeSubMenu('settings')}><NavLink activeClassName={'selected'} to={'/settings'}>Settings</NavLink></li>
      </ul>
      <SubHeader menu={subMenu} />
    </nav>
    </div> );
};

export default PortalHeader;
