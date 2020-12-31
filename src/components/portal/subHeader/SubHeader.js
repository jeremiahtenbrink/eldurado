import React from "react";

const SubHeader = ({menu}) => {
  
  return ( <div className='sub-header'>
    <ul>
      {menu}
    </ul>
    </div> );
};

export default SubHeader;
