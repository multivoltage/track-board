import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Entity from './entity';

/* we want use this componet for each state that user can create */
export default class StateContainer extends Component {

  constructor(props){
    super(props);
  }

  renderRow(){
    return this.props.entities.map((entity,index) => {
      return <Entity key={index} entity={entity}/>
    });
  }

  render() {
    return (
      <Paper className="state-container" zDepth={1}>
        <div>
          <header>
            <h1>{this.props.state}</h1>
          </header>

          {this.renderRow()}
          
        </div>
      </Paper>
    );
  }

  renderEntities(){
    
  }
}
