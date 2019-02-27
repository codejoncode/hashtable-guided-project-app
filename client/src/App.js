import React, { Component } from 'react';
import './App.css';
import HashFunction from './Components/HashFunction';
import HashArray from './Components/HashArray';
import CollisionHandle from './Components/CollisionHandle';


class App extends Component {
  state = {

  }


  render() {
    return (
      <div className="App">
        <h1>Hash Function</h1>
        <HashFunction />
        <h1>Hash Table</h1>
        <HashArray />
        <br/>
        <br/>
        <br/>
        <h1>Handle Collisions</h1>
        <CollisionHandle />
      </div>
    );
  }
}

export default App;
