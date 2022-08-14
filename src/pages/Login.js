import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from 'antd'
import '../assets/css/login.css'
import FormError from '../components/formError';


const Login = () =>  {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [loginError, setLoginError] = useState();

  const redirect = route => {
    switch (route) {
      case 'register':
        navigate("/register");
        break;
        case 'forgetPassword':
        navigate("/forgot-password");
        break;
      default: console.log("NO ROUTE");
    } 
  }

  const onUsernameChange = e => {
    setUsername(e.target.value)
  }
  const onPasswordChange = e => {
    setPassword(e.target.value)
  }
  const submit = async () => {
    setLoginError("");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };
    const response = await fetch('http://localhost:5000/users/login', requestOptions);
    
    if(response.status === 200){
      navigate("/main-page");
    }else if(response.status === 401){
      setLoginError("Neteisingi prisijungimo duomenys!");
    }
    else{
      setLoginError("Ivyko klaida!");
    }
  }

  return (
    <div className="login">
      <Form labelCol={{ span: 12 }} >
      <Form.Item  
        label="Vartotojo vardas"
        name="username"
      >
        
        <Input 
          onChange={onUsernameChange}
          class="my-10 mx-5"
          placeholder="Įveskite vartotojo vardą" 
        />
      </Form.Item>
      <Form.Item
        label="Slaptažodis"
        name="password"
       >
      <Input.Password
        onChange={onPasswordChange}
        class="my-10 mx-5"
        placeholder="Įveskite slaptažodį" 
        />
      </Form.Item>
      <FormError error={loginError} />
      <Button onClick={submit} block type="primary"  size={'large'}>Login</Button>
      <br />
      <br />
      <Button onClick={() => redirect("register")} block>Registruotis</Button> 
       <p className="login-form-forgot" onClick={() => redirect("forgetPassword")} style={{ fontSize: "18px", marginTop: "25px", color: 'darkblue', cursor: "pointer"}}>  Pamiršau slaptažodį  </p>
      </Form>
    </div>
  )
  
};

export default Login;