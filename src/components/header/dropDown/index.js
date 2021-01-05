import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";

const DropDown = ({name, menu, subMenu, setSubMenu}) => {
  
  return (
    <li onClick={() => setSubMenu(name)}>
      {name}
      <FontAwesomeIcon className={'chevron'} icon={subMenu === name ? faChevronUp : faChevronDown} />
      {subMenu === name &&
      <ul>
        { menu }
      </ul>
      }
    </li>
     );
};

export default DropDown;
