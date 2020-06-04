import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './container/homepage';


const root = {
  display: "flex",
  width: "100%",
  height: "100%",
};

class App extends React.Component {
  render() {
    return (
      <div style={root}>
        <Homepage />
      </div>
    )
  }
}

export default App;
