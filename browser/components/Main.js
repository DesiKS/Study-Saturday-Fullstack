import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm'; //<----- CYCLE 1!!!!

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      showStudent: false //<----- CYCLE 1!!!!
    };
    this.handleClick = this.handleClick.bind(this); //<----- CYCLE 1!!!!
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }
  // CYCLE 1 BELOW
  handleClick() {
    this.setState({
      showStudent: !this.state.showStudent
    });
  }
  //CYCLE 1 ABOVE

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        {/* CYCLE 1 BELOW */}
        <button onClick={this.handleClick}>Add Student</button>
        {this.state.showStudent ? (
          <NewStudentForm addStudent={this.addStudent} />
        ) : null}
        {/* CYCLE 1 ABOVE */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
