import React, { Component } from 'react';
import Entity from './entity';

/* we want use this componet for each state that user can create */
export default class StateContainer extends Component {

  constructor(props){
    super(props);
  }

  renderRow(){
    return this.props.entities.map((entity,index) => {      
      return (
            <Entity key={index}
                title={entity.title}
                description={entity.description}
                type={entity.type}
                state={entity.state}
                priority={entity.priority}
                fullUser={this.props.users.find((user) => entity.reporter === user.username)} />
      );
    });
  }

  render() {
    return (
      <div className="state-container">
          <header>
            <h1>{this.props.state}</h1>
          </header>
            <div className="state-container--list" >
              {this.renderRow()}
            </div>
      </div>
    );
  }

  renderEntities(){
    
  }
}
