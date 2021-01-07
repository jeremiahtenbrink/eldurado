import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import Modal from "../modal";
import Form from "../form";
import FormInput from "../formInput/FormInput";

const EmergencyOrder = ({account}) => {
  
  const [form, setForm] = useState({});
  const [showSubmitted, setShowSubmitted] = useState(false);
  const history = useHistory();
  
  const handleChange = (name, value)=> {
    setForm({...form, [name]: value})
  }
  
  const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    setShowSubmitted(true);
    setTimeout(() => {
      history.goBack();
    }, 1500)
  }
  
  return (
    <div className='emergency-order'>
      <Modal>
        <Form>
          { showSubmitted ?
            <h1>Thank you. Someone will be contacting you shortly.</h1> :
            <>
            <h1>Place an emergency order for { account }.</h1>
            <FormInput
              name={ 'details' }
              type={ 'text-area' }
              onChange={ handleChange }
              value={ form.details }
              label={ 'Please tell us what you need' }
            />
            <FormInput
              onChange={handleChange}
              type={'email'}
              value={form.email}
              name={"email"}
              label={"Email Address"}
              style={ { width: "50%" } }
            />
            <div className="row">
            <FormInput
            style={ { width: "60%" } }
            onChange={ handleChange }
            label={ 'Name' }
            name={ 'name' }
            value={ form.name }
            />
            <FormInput
            onChange={ handleChange }
            name={ 'phone' }
            label={ "Phone" }
            value={ form.phone }
            />
            <button type={ 'submit' } onClick={ submit }>Submit</button>
            <h4 onClick={ () => history.goBack() } className='cancel-button'>Cancel</h4>
            </div></> }
        </Form>
      </Modal>
    </div>
  );
};

export default EmergencyOrder;
