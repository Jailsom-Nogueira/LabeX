import React from 'react';
import { useHistory } from "react-router-dom";
import { LoginPageContainer, LoginCard } from './styles'
import useForm from '../../hooks/useForm';

import axios from 'axios';
import { baseUrl, user} from '../../constants/axios';

export default function LoginPage () {
  const history = useHistory();
  
  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const body = {
      'email': `${form.email}`,
      'password': `${form.password}`
    };
    axios
      .post(`${baseUrl}${user}/login`, 
        body
      )
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/admin/create-trip');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = event => {
    event.preventDefault();
    handleLogin();
  };

  return(
    <LoginPageContainer>
      <LoginCard>
        <h1>LOGIN</h1>
        <form onSubmit={handleSave}>
          <input
            name='email' 
            type='text' 
            placeholder='Seu email' 
            value={form.email} 
            onChange={handleInputChange}
            required 
          />
          <input
            name='password' 
            type='password' 
            placeholder='Sua senha' 
            value={form.password} 
            onChange={handleInputChange} 
            required
          />            
          <button>Entrar</button>
        </form>
      </LoginCard>
    </LoginPageContainer>
  )
}