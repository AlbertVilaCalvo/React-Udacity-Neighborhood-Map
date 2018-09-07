import React, { Component } from 'react';
import menu from './menu.svg';
import './App.css';
import LocationList from './LocationList';
import Map from './Map';
import SearchFilter from './SearchFilter';

class App extends Component {
  state = {
    searchText: ''
  }

  onSearchTextChange = (searchText) => {
    console.log('searchText: ' + searchText);
    this.setState({ searchText })
  }

  render() {
    return (
      <div className="App">
        <div className='left-container'>
          <div className='page-title-container'>
            <h1 className='page-title'>Catalonia Locations</h1>
          </div>
          <SearchFilter
            searchText={this.state.searchText}
            onSearchTextChange={this.onSearchTextChange}
          />
          <LocationList locations={this.props.locations} />
        </div>

        <div className='right-container'>
          <div className='right-container-top-bar'>
            <img src={menu} alt='Menu' className='menu-icon'/>
          </div>
          <div className='map-container'>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `calc(100vh - 63px)` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
