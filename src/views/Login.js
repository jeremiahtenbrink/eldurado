import React, { useRef, useState } from "react";
import FormInput from "../components/formInput/FormInput";
import Form from "../components/form";

const Login = ({setLogin}) => {
  
  const [info, setInfo] = useState({});
  const [error, setError] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  
  const onChange = (name, value) => {
    setInfo({[name]: value})
  }
  
  const submit = (e) => {
    e.preventDefault();
    let loginInfo = info;
    if (!info.username){
      if(usernameRef.current && usernameRef.current.value){
        loginInfo.username = usernameRef.current.value;
      }else {
        setError('Username is required');
        return;
      }
    }
    
    if(!info.password){
      if(passwordRef.current && passwordRef.current.value){
        loginInfo.password = passwordRef.current.value;
      }else {
        setError("Password field is required");
        return;
      }
    }
    
    setLogin(loginInfo);
  }
  
  return (
    <div className="login">
      <div className="login-form">
        <Form>
          <h2>Please login to continue to the portal.</h2>
          <FormInput label={'Username'} inputRef={usernameRef} name={"username"} onChange={onChange} ></FormInput>
          <FormInput label={'Password'} inputRef={passwordRef} name={"password"} onChange={onChange} type={'password'} ></FormInput>
          <button type={"submit"} onClick={submit}>Login</button>
          {error && <h4 className={'form-error'}>{error}</h4>}
        </Form>
      </div>
    </div> );
};

export default Login;
