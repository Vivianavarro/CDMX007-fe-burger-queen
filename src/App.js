import React from 'react';
import logo from './bqueen.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 class="burgerqueen">Burger Queen</h2>
      <div class="circle">
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <button className="login">Iniciar Sesión</button>
      <button className="login">Registrarse</button>
      </header>
    </div>
  );
}

export default App;
