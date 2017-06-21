import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Container, Dimmer, Loader, Divider, Label, Button } from 'semantic-ui-react';
import TabsLayout from './tabs-layout';

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

    // else 
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
            </header>
            <Divider />   
            <TabsLayout tabs={["Description","Flow","History"]} selected="Description">
              <Button tab="Description">tab1</Button>
              <Button tab="Flow">tab2</Button>
              <Button tab="History">tab3</Button>
            </TabsLayout>
          </Container>          
        </div>
    );
  }
}

