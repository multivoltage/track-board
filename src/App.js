import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import './reset.css';

import StateContainer from './components/state-container';

const STATES = ["progress","testing","done"];
const URL_API = 'https://raw.githubusercontent.com/multivoltage/track-board/master/src/data.json';

export default class App extends Component {

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
    fetch(URL_API)
      .then((res) => res.json())
      .then((dataObj) => {
        //console.log(dataObj);
        this.setState({
          entities: dataObj.entities,
          users: dataObj.users
        });
        
      })
      .catch((e) => {
        console.error(e);
      })
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