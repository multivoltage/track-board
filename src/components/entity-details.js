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
              <Container className="description"  tab="Description">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
              </Container>
              <Button tab="Flow">tab2</Button>
              <Button tab="History">tab3</Button>
            </TabsLayout>
          </Container>          
        </div>
    );
  }
}

