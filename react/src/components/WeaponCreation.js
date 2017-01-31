import React, { Component } from 'react'

class Weapon extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      range: '',
      shots: '',
      weaponStrength: '',
      ap: '',
      firstSpecial: '',
      secondSpecial: '',
      thirdSpecial: '',
      fourthSpecial: '',
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
    let formData = { name: this.state.name, range: this.state.range, shots: this.state.shots, weaponStrength: this.state.weaponStrength, ap: this.state.ap, firstSpecial: this.state.firstSpecial, secondSpecial: this.state.secondSpecial, thirdSpecial: this.state.thirdSpecial, fourthSpecial: this.state.fourthSpecial }
    $.ajax({
      type: 'POST',
      url: '/api/v1/weapons',
      data: { weapon: formData }
    }).success(data =>{
      $.toast('success');
    }).error(data => {
      $.toast('Please Sign In');
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
      Name:<input
        type="text"
        value={this.name}
        name='name'
        onChange={this.handleChange}
        />
      "Range":<input
        type="number"
        value={this.range}
        name='range'
        onChange={this.handleChange}
        />
        Shots:<input
          type="number"
          value={this.shots}
          name='shots'
          onChange={this.handleChange}
          />
          Weapon Strength:<input
            type="number"
            value={this.weaponStrength}
            name='weaponStrength'
            onChange={this.handleChange}
            />
      AP:<input
        type="number"
        value={this.ap}
        name='ap'
        onChange={this.handleChange}
        />
        Special Rule:<input
          type="text"
          value={this.firstSpecial}
          name='firstSpecial'
          onChange={this.handleChange}
          />
          Special Rule:<input
            type="text"
            value={this.secondSpecial}
            name='secondSpecial'
            onChange={this.handleChange}
            />
            Special Rule:<input
              type="text"
              value={this.thirdSpecial}
              name='thirdSpecial'
              onChange={this.handleChange}
              />
              Special Rule:<input
                type="text"
                value={this.fourthSpecial}
                name='fourthSpecial'
                onChange={this.handleChange}
                />

                      <input type="submit" value="Submit Unit" />
                      </form>
      </div>
    );
  };

}



export default Weapon;
