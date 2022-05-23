import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, message } from 'antd'
import FormError from '../components/formError';
import style from '../assets/css/login.css'

const ForgetPassword = () =>  {
  const [emailRemind, setEmailRemind] = useState("");
 
  const navigate = useNavigate();

  const onEmailRemindChange = e => {
    setEmailRemind(e.target.value)
  }
 
  return (
    <div className="forgetPassWord">
      <Form labelCol={{ span: 12 }} >
        <Form.Item
          label="Įveskite el.pašto adresą"
          name="email"
          rules={[
            {
              message: '',
              min:5
            },
          ]}
        >
          <Input
            onChange={onEmailRemindChange}
            class="my-10 mx-5"
            placeholder="El.pašto adresas" 
          />
        </Form.Item>
        
        <Button type="primary" size={'large'} >Priminti slaptažodį</Button>
      </Form>
    </div>
  )
  
};

export default ForgetPassword;