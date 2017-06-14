import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class Entity extends Component {
  render() {
    console.log('asdfdfds');
    return (
      <Card className="entity">
        <CardHeader
          title={this.props.title}
          subtitle={this.props.description}
          avatar={this.props.fullUser.avatar_url}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText expandable={true}>
          erewrtewrtewrtewrtewrtwertew
        </CardText>
      </Card>
    );
  }
}

