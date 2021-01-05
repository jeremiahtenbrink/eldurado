import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../subHeader/SubHeader";
import MenuItem from "../../menuItem";
import { useMenu } from "../../../customHooks/useMenu";

const PortalHeader = () => {
  const { accountSummary, standingOrder, nextDelivery } = useMenu();
  const menus = {
    "Account Summary": accountSummary,
    "Standing Order": standingOrder,
    "Next Delivery": nextDelivery
  }
  const location = useLocation();
  
  const [subMenu, setSubMenu] = useState(menus.summary);
  
  useEffect(() => {
    
    const pathname = location.pathname;
    
    if(pathname.includes('summary')){
      setSubMenu(menus['Account Summary']);
    }else if (pathname.includes('order')){
      setSubMenu(menus['Standing Order']);
    }else if (pathname.includes('delivery')){
      setSubMenu(menus['Next Delivery']);
    }else if (pathname.includes('faq')){
      setSubMenu(menus['faq']);
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
        <MenuItem to={'/summary/overview'} name={'Account Summary'} handleClick={changeSubMenu} />
        <MenuItem to={'/order'} name={"Standing Order"} handleClick={changeSubMenu} />
        <MenuItem to={'/delivery'} name={"Next Delivery"} handleClick={changeSubMenu} />
        <MenuItem to={'/faq'} name={"FAQ"} handleClick={changeSubMenu}/>
        <MenuItem to={'/settings'} name={"Settings"} handleClick={changeSubMenu}/>
      </ul>
      <SubHeader menu={subMenu} />
    </nav>
    </div> );
};

export default PortalHeader;
