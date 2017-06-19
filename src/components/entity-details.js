import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const URL_API = 'https://raw.githubusercontent.com/multivoltage/track-board/master/src/data.json';

export default class EntityDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      entity: null
    };
  }

  componentDidMount(){
    fetch(URL_API)
      .then((res) => res.json())
      .then((dataObj) => {
        //console.log(dataObj);
        let entity = dataObj.entities.find((e) => e.id === this.props.entityId);
        this.setState({
          entity : entity
        });
        console.log(dataObj);
        console.log(entity);
      })
      .catch((e) => {
        console.error(e);
      })
  }

  render() {
    console.log(this.state);
      return (
        <div className="entitiy-details">
          <Link to='/'>
            <span className="close">X</span>
            <span>entity: </span>
          </Link>
        </div>
      );
  }
}

