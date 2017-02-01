import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class FaceOff extends Component {
  constructor() {
    super();
    this.state = {
      units: [],
      weapons: [],
    };
    this.getUnits = this.getUnits.bind(this);
    this.getWeapons = this.getWeapons.bind(this);

  };

  getUnits() {
    $.ajax({
      method: 'GET',
      url: '/api/v1/units'
    }).done(data => {
      this.setState({ units: data.units });
    });
  }
  getWeapons() {
    $.ajax({
      method: 'GET',
      url: '/api/v1/weapons'
    }).done(data => {
      this.setState({ weapons: data.weapons });
    });
  }

  componentWillMount(){
    this.getUnits();
    this.getWeapons();
  }

  render() {
    return (
      <div>Hello World</div>
    );
  };

};

export default FaceOff;
