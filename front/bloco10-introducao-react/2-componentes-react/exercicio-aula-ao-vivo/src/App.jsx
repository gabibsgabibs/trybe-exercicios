import './App.css';
import VideoGameList from './components/VideoGameList';
import gamesList from './data';
import React from 'react';

class App extends React.Component {
  render() {

    return (
      <div className='App'>
        {/* passando como props o data importado no App para o VideoGameList */}
        <VideoGameList games={ gamesList }/>
      </div>
    );
  }
}

export default App;
