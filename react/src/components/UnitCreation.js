import React, { Component } from 'react';
import { hashHistory } from 'react-router';


class Unit extends Component {
  constructor() {
    super();
    this.state = {
      army: '',
      unitName: '',
      minimumSize: '',
      maximumSize: '',
      ws: '',
      bs: '',
      strength: '',
      toughness: '',
      wounds: '',
      iniative: '',
      attacks: '',
      leadership: '',
      sv: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }
  handleFormSubmit(event) {
    let formData = { army: this.state.army, unitName: this.state.unitName, minimumSize: this.state.minimumSize, maximumSize: this.state.maximumSize, ws: this.state.ws, bs: this.state.bs, strength: this.state.strength, toughness: this.state.toughness, wounds: this.state.wounds, iniative: this.state.iniative, attacks: this.state.attacks, leadership: this.state.leadership, sv: this.state.sv  }
    $.ajax({
      type: 'POST',
      url: '/api/v1/units',
      data: { unit: formData }
    }).success(data =>{
      hashHistory.push('/');
    }).error(data => {
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
      Army:<input
        type="text"
        value={this.army}
        name='army'
        onChange={this.handleChange}
        />
      Unit Name:<input
        type="text"
        value={this.unitName}
        name='unitName'
        onChange={this.handleChange}
        />
        Minimum Unit Size:<input
          type="number"
          value={this.minimumSize}
          name='minimumSize'
          onChange={this.handleChange}
          />
          Maximum Unit Size:<input
            type="number"
            value={this.maximumSize}
            name='maximumSize'
            onChange={this.handleChange}
            />
      Weapon Skill:<input
        type="number"
        value={this.ws}
        name='ws'
        onChange={this.handleChange}
        />
        Balistic Skill:<input
          type="number"
          value={this.bs}
          name='bs'
          onChange={this.handleChange}
          />
          Strength:<input
            type="number"
            value={this.strength}
            name='strength'
            onChange={this.handleChange}
            />
            Toughness:<input
              type="number"
              value={this.toughness}
              name='toughness'
              onChange={this.handleChange}
              />
              Wounds:<input
                type="number"
                value={this.wounds}
                name='wounds'
                onChange={this.handleChange}
                />
                Iniative:<input
                  type="number"
                  value={this.iniative}
                  name='iniative'
                  onChange={this.handleChange}
                  />
                  Attacks:<input
                    type="number"
                    value={this.attacks}
                    name='attacks'
                    onChange={this.handleChange}
                    />
                  Leadership:<input
                    type="number"
                    value={this.leadership}
                    name='leadership'
                    onChange={this.handleChange}
                    />
                    Armor Save:<input
                      type="number"
                      value={this.sv}
                      name='sv'
                      onChange={this.handleChange}
                      />
                      <input type="submit" value="Submit Unit" />
                      </form>
      </div>
    );
  };

}



export default Unit;
