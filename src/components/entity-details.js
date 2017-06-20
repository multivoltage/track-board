import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const URL_API = 'https://raw.githubusercontent.com/multivoltage/track-board/master/src/data.json';

export default class EntityDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      entitiy: {}
    };
  }

  componentDidMount(){
    let entity_id = this.props.match.params.number;
    this.props.entityPromise(1)
      .then((res) => {
        this.setState({entitiy: res});
      })
      .catch((reason) => {
        console.log(reason);
      });
  }

  render() {
      return (
        <div className="entitiy-details">
          <Link to='/'>
            <span className="close">X</span>
            <span>entity: {this.state.entitiy.title}</span>
          </Link>
        </div>
      );
  }
}

