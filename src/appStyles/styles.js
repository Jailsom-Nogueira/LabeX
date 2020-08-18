import styled from 'styled-components';

export const MyTheme = styled.div`
  margin: 0;
  padding: 0;
  color: #7d7a7a;
  border-color: #7d7a7a;
  button {
    background-color: lightcoral; 
    border: none;
    border-radius: 4px;
    outline: none;
    color: white;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
    transition-duration: 0.4s;
  }
  button:hover{
    background-color: #e27878;
  }
  input, textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }
  p{
    margin: 0.1rem;
    padding: 0;
  }
`