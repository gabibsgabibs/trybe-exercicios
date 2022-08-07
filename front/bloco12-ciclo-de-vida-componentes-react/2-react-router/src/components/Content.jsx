import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import TrybeTalks from '../pages/TrybeTalks';
import Solutions from '../pages/Solutions';
import SolutionItem from '../pages/SolutionItem';


class Content extends Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/calendar" component={ Calendar }/>
          <Route exact path="/live-lectures" component={ LiveLectures }/>
          <Route exact path="/trybe-talks" component={ TrybeTalks }/>
          <Route exact path="/solutions" component={ Solutions }/>
          <Route exact path="/solutions/:id" component={ SolutionItem }/>
        </Switch> 
      </main>
    );
  }
}

export default Content;