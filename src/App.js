import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';

import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Home />
    </div>
  );
}

export default App;
