import React, { useRef, useEffect } from "react";

const FormInput = ({label, name, onChange, value, inputRef, type='text'}) => {
  
  
  return ( <div className='form-input'>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      ref={inputRef}
      type={type}
      value={value}
      name={name}
      onChange={(e) => onChange(name, e.target.value)}
    />
    </div> );
};

export default FormInput;
