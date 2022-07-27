import React, { Component } from "react";
import logo from'./trybe-logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={ logo } alt="" />
        </header>

        <main className="app">
          <LoginForm />
        </main>
      </div>
    );
  }
}

export default App;
