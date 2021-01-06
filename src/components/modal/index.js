import React from "react";
import { useHistory } from "react-router-dom";

const Modal = ({children}) => {
  
  const history = useHistory();
  
  return ( <div className='modal'>
    <div onClick={() => history.goBack()} className='close'>
      Close
    </div>
    {children}
    </div> );
};

export default Modal;
