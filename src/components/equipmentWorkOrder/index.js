import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import Form from "../form";
import Modal from "../modal";
import FormInput from "../formInput/FormInput";

const EquipmentWorkOrder = ({account}) => {
  
  const [form, setForm] = useState({});
  const [showSubmitted, setShowSubmitted] = useState(false);
  const history = useHistory();
  
  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    setShowSubmitted(true);
    setTimeout(() => {
      history.goBack();
    }, 1500)
  }
  
  return ( <div className="equipment-work-order-form">
    <Modal>
      <Form>
        { showSubmitted ?
          <h1>Thank you. Someone will be contacting you shortly.</h1> :
          <>
            <h1>Place an equipment work order for { account }.</h1>
            <FormInput
              name={ 'details' }
              type={ 'text-area' }
              onChange={ handleChange }
              value={ form.details }
              label={ "Please tell us what's going on." }
            />
            <FormInput
              onChange={handleChange}
              type={'email'}
              value={form.email}
              name={"email"}
              label={"Email Address"}
            />
            <div className="row">
              <FormInput
                style={ { width: "50%" } }
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
              <button type={ 'submit' } onClick={ submitForm }>Submit</button>
              <h4 onClick={ () => history.goBack() } className='cancel-button'>Cancel</h4>
            </div></> }
      </Form>
    </Modal>
  </div> );
};

export default EquipmentWorkOrder;
