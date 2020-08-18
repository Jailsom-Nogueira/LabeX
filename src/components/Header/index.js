import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar } from './styles'

export default function Header () {
  const token = window.localStorage.getItem('token');
  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  };

  const goToLoginPage = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push('/login');
  };

  const isLogged = token === null ? 
    <>
      <button onClick={goToLoginPage}>LOGIN</button> 
      <button onClick={() => history.push('/signUp')}>CADASTRAR</button>
    </>
    : 
    <button onClick={handleLogout}>LOGOUT</button>

  return(
    <AppBar>
      <button onClick={goToHomePage}>HOME</button>
      {isLogged}
    </AppBar>
  );
}