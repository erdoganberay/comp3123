import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to Fullstack Development - I',
      subtitle: 'React JS Programming Week09 Lab exercise',
      studentId: '101582362',      
      studentName: 'Beray Erdogan',   
      college: 'George Brown Polytechnic, Toronto'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.title}</h1>
          <h2>{this.state.subtitle}</h2>
          <h3>{this.state.studentId}</h3>
          <h4>{this.state.studentName}</h4>
          <h5>{this.state.college}</h5>
        </header>
      </div>
    );
  }
}

export default App;
