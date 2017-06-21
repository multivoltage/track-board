import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Container, Dimmer, Loader, Divider } from 'semantic-ui-react';

export default class EntityDetails extends Component {

    constructor(props){
        super(props);
    }

    renderTabsHeader(){

    }

    renderTabBody(){
        const styleVisible = {
            
        }
    }
    
    render() {

        const tabSelectedStyle = {
            backgroundColor: 'red'
        }

        return this.props.tabs.map((tab) => {
            return (
                <span className=""></span>
            );
        });
    }
}

