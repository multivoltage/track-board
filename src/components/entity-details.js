import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EntityDetails extends Component {
  render() {
      return (
        <div className="entitiy-details">
          <Link to='/'>
            <span className="close">X</span>
          </Link>
        </div>
      );
  }
}

