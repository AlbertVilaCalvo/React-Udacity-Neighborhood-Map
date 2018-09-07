import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import menu from './menu.svg';
import './App.css';
import LocationList from './LocationList';
import Map from './Map';
import SearchFilter from './SearchFilter';

class App extends Component {
  state = {
    searchText: '',
    selectedLocationName: ''
  }

  onSearchTextChange = (searchText) => {
    this.setState({ searchText })
  }

  onMarkerClick = (location) => {
    console.log('selected location', location);
    this.setState({ selectedLocationName : location.name });
  }

  render() {
    const { locations } = this.props;
    const { searchText, selectedLocationName } = this.state;

    let filteredLocations;
    if (searchText) {
      const match = new RegExp(escapeRegExp(searchText), 'i');
      filteredLocations = locations.filter(loc => match.test(loc.name));
    } else {
      filteredLocations = locations;
    }

    filteredLocations.sort(sortBy('name'));

    filteredLocations = filteredLocations.map(location => {
      if (location.name === selectedLocationName) {
        location.selected = true;
      } else {
        location.selected = false;
      }
      return location;
    });

    return (
      <div className="App">
        <div className='left-container'>
          <div className='page-title-container'>
            <h1 className='page-title'>Catalonia Locations</h1>
          </div>
          <SearchFilter
            searchText={searchText}
            onSearchTextChange={this.onSearchTextChange}
          />
          <LocationList locations={filteredLocations} />
        </div>

        <div className='right-container'>
          <div className='right-container-top-bar'>
            <img src={menu} alt='Menu' className='menu-icon'/>
          </div>
          <div className='map-container'>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCxHDcOqSP9RuEhsRGu81XqiTomYzVETfo"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `calc(100vh - 63px)` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              locations={filteredLocations}
              onMarkerClick={this.onMarkerClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
