import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';

export default class SharePopup extends Component {

  render() {
    return (
      <Popup
        trigger={<Button className="share-popup" color='green' icon='share'></Button>}
        content={this.props.sharable}
        on='click'
        hideOnScroll/>
    );
  }
}



