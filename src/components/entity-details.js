import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Container, Dimmer, Loader, Divider, Label, Button, TextArea, Form } from 'semantic-ui-react';
import TabsLayout from './tabs-layout';
import SharePopup from './share_popup';
import TabDescription from './tab_description';

export default class EntityDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      entitiy: null
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

    if(!this.state.entitiy){
      return (
          <Dimmer active inverted>
            <Loader size='massive'>Loading entitiy</Loader>
          </Dimmer> 
      );
    }

    return (
        <div className="entitiy-details">
          <Container>
            <header>
              <h1>
                <Label color={this.state.entitiy.type === 'userstory' ? 'blue' : 'red'}>
                  {this.state.entitiy.type.toUpperCase()}
                </Label>
                <span className="id">#{this.state.entitiy.id}</span>
                <span> | </span>
                <span className="title">{this.state.entitiy.title}</span>
              </h1>
              <SharePopup sharable={window.location.href} />             
            </header>
            <Divider />   
            <TabsLayout tabs={["Description","Flow","History"]} selected="Description">
              <TabDescription tab="Description"/>
              <span>{/* with a single child TabsLayout does not render, I dont know why*/}</span>
            </TabsLayout>
          </Container>          
        </div>
    );
  }
}

