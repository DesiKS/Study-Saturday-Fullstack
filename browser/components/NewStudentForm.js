// CYCLE 1 :

import React from 'react';

export default class NewStudentForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}

// CYCLE 1 END!!!!!!!
