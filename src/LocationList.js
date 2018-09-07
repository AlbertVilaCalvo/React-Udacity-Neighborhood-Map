import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    return (
      <ul>
        {this.props.locations.map(location =>
          <li key={location.name}>{location.name}</li>
        )}
      </ul>
    )
  }
}

export default LocationList;
