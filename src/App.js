import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import './reset.css';

import StateContainer from './components/state-container';

const STATES = ["backlog","todo","progress","testing","done"];

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      stateLayout: 'colum'
    };
  }
  renderStateColums(){
    return STATES.map((state) => {
      return (
        <StateContainer key={STATES.indexOf(state)} state={state} />
      );
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Track Board</h2>
          <p>This is a sample of track board like TargetProcess</p>
        </div>

        <div className="App-body">
          <MuiThemeProvider>
            <div className="states-group" >
              {this.renderStateColums()}
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
