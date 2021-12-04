import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './complements/menu';
import Login from './complements/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Menu/>}/>
        <Route path="/login" component={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
