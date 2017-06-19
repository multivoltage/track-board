import React, { Component } from 'react';
import Home from './components/home';
import EntityDetails from './components/entity-details';
import { HashRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/entities/:number' component={EntityDetails} />
        </Switch>
      </HashRouter>
    );
  }
}
