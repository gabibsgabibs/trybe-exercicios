import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default App;