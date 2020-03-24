import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  //CYCLE 2 BELOW:
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }
  //CYCLE 2 ABOVE

  render() {
    // console.log('HERE3333', this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            // CYCLE 2 BELOW
            onChange={this.handleChange}
            value={this.state.firstName}
            // CYCLE 2 ABOVE
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            // CYCLE 2 BELOW
            onChange={this.handleChange}
            value={this.state.lastName}
            // CYCLE 2 ABOVE
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            // CYCLE 2 BELOW
            onChange={this.handleChange}
            value={this.state.email}
            // CYCLE 2 ABOVE
          />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
