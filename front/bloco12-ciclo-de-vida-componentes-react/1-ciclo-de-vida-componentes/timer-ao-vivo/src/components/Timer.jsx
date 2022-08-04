import React, { Component } from 'react'
import sound from '../assets/bip.mp3'

const ONE_SECOND = 1000;
const TIME_LIMIT = 5;

class Timer extends Component {

  constructor() {
    super();
    console.log('constructor()');
  }

  state = {
    seconds: 0,
    phases: ['🫁 Inspire...', '🤐 Segure...', '😮‍💨 Expire...'],
    currentPhaseIndex: 0,
  }

  componentDidMount() {
    const audio = new Audio(sound);

    this.intervalId = setInterval(() => {
      audio.play();
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }) );
    }, ONE_SECOND);
  
  }

  componentDidUpdate() {    
    const { seconds } = this.state;

    if (seconds === TIME_LIMIT) {

      this.setState((prevState) => {
        const previousIndex = prevState.currentPhaseIndex;
        
        return {
          seconds: 0,
          currentPhaseIndex: previousIndex < 2 ? previousIndex + 1 : 0,
        }

      });

    }

  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    console.log('render()');

    const { seconds, phases, currentPhaseIndex } = this.state;

    return (
      <section>
        <h1>{ phases[currentPhaseIndex] }</h1>
        <h2>{ seconds }</h2>
      </section>
    )
  }
}

export default Timer;