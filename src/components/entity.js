import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Entity extends Component {
  render() {

    let classes = "entity ";
    classes += this.props.type;
    
    return (
      <Link to='/entities/1'>
      <Card className={classes}>
        <Card.Content>
          <Image floated='right' size='mini' src={this.props.fullUser.avatar_url} />
          <Card.Header>
            {this.props.title}
          </Card.Header>
          <Card.Meta>
            // todo
          </Card.Meta>
          <Card.Description>
            {this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>   
      </Link>   
    );
  }
}

