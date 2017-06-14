import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class Entity extends Component {
  render() {

    let classes = "entity ";
    classes += this.props.type;
    
    return (
      <Card className={classes}>
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

