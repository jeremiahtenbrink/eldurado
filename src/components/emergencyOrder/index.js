import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import Modal from "../modal";
import Form from "../form";
import FormInput from "../formInput/FormInput";

const EmergencyOrder = ({account}) => {
  
  const [form, setForm] = useState({});
  const history = useHistory();
  
  const handleChange = (name, value)=> {
    setForm({...form, [name]: value})
  }
  
  const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    history.goBack();
  }
  
  return (
    <div className='emergency-order'>
      <Modal>
        <Form>
          <h1>Place an emergency order for {account}.</h1>
          <FormInput
            name={'details'}
            type={'text-area'}
            onChange={handleChange}
            value={form.details}
            label={'Please tell us what you need'}
          />
          <div className="row">
            <FormInput
              style={{width: "50%"}}
              onChange={handleChange}
              label={'Name'}
              name={'Name'}
              value={form.name}
            />
            <FormInput
              onChange={handleChange}
              name={'Phone'}
              label={"Phone"}
              value={form.phone}
            />
            <button type={'submit'} onClick={submit}>Submit</button>
            <h4 onClick={() => history.goBack()} className='cancel-button'>Cancel</h4>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EmergencyOrder;