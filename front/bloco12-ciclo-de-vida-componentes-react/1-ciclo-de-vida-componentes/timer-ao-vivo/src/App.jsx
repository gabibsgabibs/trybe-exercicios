import React, { Component } from 'react'
import './App.css'
import logo from './assets/trybemestar.png'
import Timer from './components/Timer'

class App extends Component {

  state = {
    showTimer: false,
  }

  toggleTimer = () => {
    // se o estado for true, passa pra falso e vice versa
    this.setState((prevState) => {
      const previousShowTimer = prevState.showTimer;

      return {
        showTimer: !previousShowTimer,
      }
    });
  }

  render() {
    const { showTimer } = this.state;
    return (
      <div>

        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>

        { showTimer && <Timer /> }

        <button onClick={this.toggleTimer}>
          { showTimer ? 'Desligar Timer' : 'Ligar Timer'}
        </button>

      </div>
    )
  }

}

export default App;