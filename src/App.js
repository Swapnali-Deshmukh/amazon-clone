import './App.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login/>
           
          </Route>
          <Route path="/checkout">
          <Header/>
          <Checkout/>
           </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
