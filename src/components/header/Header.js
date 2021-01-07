import React, {useState} from "react";
import Background from '../../assets/images/Header.png';
import DropDown from "./dropDown";
import { useMenu } from "../../customHooks/useMenu";
import MenuItem from "../menuItem";

/**
 *
 * @param {function} logout
 * @return {*}
 * @constructor
 */
const Header = ({logout}) => {
  
  const [mobileMenuClass, setMobileMenuClass] = useState('mobile-menu');
  const [menuClass, setMenuClass] = useState('menu');
  const [subMenu, setSubMenu] = useState('');
  
  /**
   * @typedef {function} HandleSetSubMenu
   * @param {string} name
   */
  const handleSetSubMenu = (name) => {
    if(subMenu === name){
      setSubMenu('');
    }else {
      setSubMenu(name);
    }
  }
  
  /**
   * @typedef {function} SetOpen
   */
  const setOpen = () => {
    setMobileMenuClass('mobile-menu open');
    setTimeout(() => {
      setMenuClass('menu open');
    }, 50)
  }
  
  /**
   * @typedef {function} SetClose
   */
  const setClose = () => {
    setMenuClass('menu');
    setTimeout(() => {
      setMobileMenuClass('mobile-menu');
    }, 500);
  }
  
  const {accountSummary, nextDelivery, standingOrder} = useMenu(setClose);
  
  
  return ( <div className='header' style={{backgroundImage: `url(${Background})`}}>
    <div onClick={setOpen} className="hamburger">
      <div className="mobile-line"></div>
      <div className="mobile-line"></div>
      <div className="mobile-line"></div>
    </div>
    <div onClick={(e) => e.preventDefault()} className={mobileMenuClass}>
      <div className={menuClass}>
        <div onClick={setClose} className="close">
          <div className="mobile-line"></div>
          <div className="mobile-line"></div>
        </div>
        <ul>
          <MenuItem handleClick={setClose} name={"Home"} to={"/summary/overview"} />
          <DropDown name={"Account Summary"} menu={accountSummary} subMenu={subMenu} setSubMenu={handleSetSubMenu} />
          <DropDown name={"Standing Order"} menu={standingOrder} subMenu={subMenu} setSubMenu={handleSetSubMenu} />
          <DropDown name={"Next Delivery"} menu={nextDelivery} subMenu={subMenu} setSubMenu={handleSetSubMenu} />
          <MenuItem handleClick={setClose} name={"FAQ"} to={"/faq"}/>
          <MenuItem name={"Settings"} handleClick={setClose} to={"/settings"}/>
          <li onClick={() => {
            setClose();
            logout();
          }}>Logout</li>
        </ul>
      </div>
    </div>
    </div> );
};

export default Header;
