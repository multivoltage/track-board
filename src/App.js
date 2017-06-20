import React, { Component } from 'react';
import Home from './components/home';
import EntityDetails from './components/entity-details';
import { HashRouter, Switch, Route } from 'react-router-dom';
import api_helper from './api_helper.js';

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <Switch>        
          <Route exact path='/' render={routeProps => <Home {...routeProps} entitiesPromise={api_helper.GetData}/>} />
          <Route path='/entities/:number' render={routeProps => <EntityDetails {...routeProps} entityPromise={api_helper.GetEntity}/>} />
        </Switch>
      </HashRouter>
    );
  }
  
}
