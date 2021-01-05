import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";

const DropDown = ({name, list, click}) => {
  const [open, setOpen] = useState(false);
  return ( <div onClick={() => setOpen(open => !open)} className='dropdown'>
    <div className="dropdown-text">
      <h4>{name}</h4>
      <FontAwesomeIcon className={'chevron'} icon={open ? faChevronUp : faChevronDown}/>
    </div>
    {open &&
      <div className='dropdown-items'>
        { list.map( item => {
          return <h4 className='accounts-numbers' key={ item }
                     onClick={ () => click( item ) }>{ item }</h4>;
        } ) }
      </div>}
    </div> );
};

export default DropDown;
