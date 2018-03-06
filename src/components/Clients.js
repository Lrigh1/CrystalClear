import React, { Component } from 'react';

import {Header, Segment } from 'semantic-ui-react';

class Clients extends Component {
  render() {
    return (
      <div className="Clients" >
        <Segment style={{marginTop: '1rem'}} className="Text-Services">
            <div className="Commercial" style={{marginLeft: '10%'}}>
                <Header style={{paddingLeft: '25%', display: 'inline-block', fontFamily: 'Playball', fontSize: '3.5vw'}} floated='centered'>Commercial</Header>
            </div>
            <div className="Residential" style={{marginLeft: '15%'}}>
                <Header style={{paddingLeft: '25%', display: 'inline-block', fontFamily: 'Playball', fontSize: '3.5vw', webkitTextStroke: '.1rem #000'}} floated='center'>Residential</Header>
            </div>
        </Segment>
      </div>
    );
  }
}

export default Clients;