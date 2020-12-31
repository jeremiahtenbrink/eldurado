import React from "react";

const FormInput = ({label, name, onChange}) => {
  return ( <div className='form-input'>
    {label && <label for={name}></label>}
    </div> );
};

export default FormInput;
