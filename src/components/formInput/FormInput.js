import React, { useRef, useEffect } from "react";

const FormInput = ({label, name, onChange, value, inputRef, type='text', ...props}) => {
  
  
  return ( <div className='form-input'>
    {label && <label htmlFor={name}>{label}</label>}
    { type !== "text-area" &&
      <input
        { ...props }
        ref={ inputRef }
        type={ type }
        value={ value }
        name={ name }
        onChange={ ( e ) => onChange( name, e.target.value ) }
      />
    }
    {type === "text-area" &&
      <textarea
        rows={5}
        value={value} onChange={e => onChange(name, e.target.value) }
        className={'textarea'}
        name={name}
      />
    }
    </div> );
};

export default FormInput;
