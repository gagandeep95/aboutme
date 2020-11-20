import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
    
    <Provider store={store}>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}
export default App;
