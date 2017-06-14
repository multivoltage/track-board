import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class App extends Component {
  render() {

    return (
      <Card className="entity">
        <CardHeader
          title={this.props.entity.title}
          subtitle=""
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

