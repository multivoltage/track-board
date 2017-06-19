import React, { Component } from 'react';
import Home from './components/home';
import EntityDetails from './components/entity-details';
import { HashRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      entitySelected: null
    }
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/entities/:number' render={() => <EntityDetails entityId="1"/>} />
        </Switch>
      </HashRouter>
    );
  }
}
