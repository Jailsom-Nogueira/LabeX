import React from "react";
import Router from './components/Router/Router';
import { MyTheme } from './appStyles/styles'

export default function App() {
  return (
    <MyTheme>
      <Router />
    </MyTheme>
  );
}

