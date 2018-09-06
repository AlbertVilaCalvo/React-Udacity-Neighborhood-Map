import React, { Component } from 'react';
import menu from './menu.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='left-container'>
          <div className='page-title-container'>
            <h1 className='page-title'>Catalonia Locations</h1>
          </div>
          <div className='search-container'>
            <input className='search-input' placeholder='Station location' />
            <button>Filter</button>
          </div>
          <ul>
            <li>Some place</li>
            <li>Some place</li>
            <li>Some place</li>
          </ul>
        </div>
        <div className='right-container'>
          <div className='right-container-top-bar'>
            <img src={menu} alt='Menu' className='menu-icon'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
