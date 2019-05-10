import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componets/Home";
import Menu from "./componets/Menu";
import Navigation from "./componets/Navigation";


class App extends Component {
  render() {
    return(

<BrowserRouter>

 <div>
 
 <Navigation/>

 <Switch>
 <Route path= "/" component={Home} exact />
 <Route path= "/Menu" component={Menu} />
 </Switch>



 </div>

</BrowserRouter>
    
    );  
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 class="burgerqueen">Burger Queen</h2>
      <div class="circle">
      <img src={logo} className="App-logo" alt="logo" />
      </div>

      </header>
    </div>
  );
}*/

export default App; 