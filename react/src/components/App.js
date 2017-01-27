import React, { Component } from 'react'

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

  };
  handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  render() {
    return (
      <div>
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

      </div>
    );
  };

}



export default Unit;
