import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from '../logo.svg';
import './../App.css';
import './../reset.css';

import StateContainer from './state-container';

const STATES = ["progress","testing","done"];

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      stateLayout: 'colum',
      entities: [],
      users: []
    };
  }
  renderStateColums(){

    return STATES.map((state) => {
      return (
        <StateContainer key={STATES.indexOf(state)} state={state}
            entities={this.state.entities.filter((entity) => { return entity.state === state })}
            users={this.state.users} />
      );
    });
  }

  componentDidMount(){
    this.props.entitiesPromise()
      .then((res) => {
        this.setState({entities: res.entities, users: res.users})
      })
      .catch((reason) => {
        console.log(reason);
      })
  }

  render() {


    return (
      <div className="App">
        <Dimmer active={this.state.entities.length === 0} inverted>
          <Loader size='massive'>Loading board</Loader>
        </Dimmer> 
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Track Board</h2>
          <p>This is a sample of track board like TargetProcess</p>
        </div>
        <div className="states-group">
          {this.renderStateColums()}
        </div>
      </div>
    );
  }
}
