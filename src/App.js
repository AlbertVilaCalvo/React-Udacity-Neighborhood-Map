import React, { Component } from 'react';
import menu from './menu.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='left-container'>
          <h1 className='page-title'>Catalonia Locations</h1>
          <ul>
            <li>Some place</li>
          </ul>
        </div>
        <div className='right-container'>
          <img src={menu} alt='Menu'/>
        </div>
      </div>
    );
  }
}

export default App;
