import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd'
import { useNavigate } from 'react-router-dom';
import FormError from '../components/formError';
import style from '../assets/css/login.css'
import validator from 'validator'


const Register = () =>  {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [repeatPassword, setRepeatPassword] = useState(""); 
  const [email, setEmail] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("")
  const [emptyPasswordFieldError, setEmptyPasswordFieldError] = useState("")
  const [emptyUsernameFieldError, setEmptyUsernameFieldError] = useState("")
  const [emailValidationError, setEmailValidationError] = useState();
  const [dataAlreadyUsedError, setDataAlreadyUsedError] = useState("")
  
 
  const onUsernameChange = e => {
    setUsername(e.target.value)
  }
  const onPasswordChange = e => {
    setPassword(e.target.value)
  }
  const onRepeatPasswordChange = e => {
    setRepeatPassword(e.target.value)
  }
  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  const submit = async () => {
    let hasError = false;
    setRepeatPasswordError(""); 
    setEmptyPasswordFieldError("")
    setEmptyUsernameFieldError("")
    setEmailValidationError("")
    setDataAlreadyUsedError("")

    if(password !== repeatPassword){
      setRepeatPasswordError("Slaptažodžiai nesutampa"); 
      hasError = true;
    }
    if(password.length < 5){
      setEmptyPasswordFieldError("Slaptažodis turėtų būti bent 5 simbolių ilgio"); 
      hasError = true;
    }
    if(username.length < 3){
      setEmptyUsernameFieldError("Vartotojo vardas turėtų būti bent 3 simbolių ilgio");
      hasError = true; 
    }
    
    if (!validator.isEmail(email)) {
      setEmailValidationError('El. pasto adresas neteisingas')
      hasError = true;
    }
    
    if(!hasError){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: username,
          password: password, 
          email: email,
        })
      };
      const response = await fetch('http://localhost:5000/users/add', requestOptions)
      if(response.status === 201){
        navigate("/");
      }else if(response.status === 401){
        setDataAlreadyUsedError("Duomenys jau naudojami!")
      }
      }   
  }

  return (
    <div className="login">
      <Form labelCol={{ span: 12 }} >
      <Form.Item  
        label="Įveskite vartotojo vardą"
        name="username"
        rules={[
          {
            required: true,
            message: '',
            min: 3
          },
         
        ]}
        hasFeedback

      >
        <Input 
          onChange={onUsernameChange}
          class="my-10 mx-5"
          placeholder="Vartotojo vardas" 
        />
      </Form.Item>

      <FormError error={emptyUsernameFieldError} />

      <Form.Item
        label="Įveskite slaptažodį"
        name="password"
        rules={[
          {
            required: true,
            message: '',
            min:5
          },
        ]}
        hasFeedback
      >
        <Input.Password
          onChange={onPasswordChange}
          class="my-10 mx-5"
          placeholder="Slaptažodis" 
        />
       </Form.Item>

       <FormError error={emptyPasswordFieldError} />

      <Form.Item
        label="Pakartokite slaptažodį"
        name="repeatPassword"
        rules={[
          {
            required: true,
            message: '',
            min: 5
          },
        ]}
        hasFeedback
      >
        <Input.Password
          onChange={onRepeatPasswordChange}
          class="my-10 mx-5"
          placeholder="Slaptažodis" 
        />
      </Form.Item>

      <FormError error={repeatPasswordError} />
           
      <Form.Item 
        label="Įveskite el. pašto adresą"
        name="email"
        rules={[
          {
            required: true,
            message: '',
          },
        ]}
        hasFeedback
      >
        <Input 
        
          onChange={onEmailChange}
          class="my-10 mx-5"
          placeholder="El.paštas" 
         
        />
       </Form.Item>

       <FormError error={emailValidationError} />
       <FormError error={dataAlreadyUsedError} />
      <Button onClick={submit} block type="primary" size={'large'}>Registruotis</Button>
    </Form>
    </div>
  )
  
};

export default Register;