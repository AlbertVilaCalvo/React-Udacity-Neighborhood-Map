import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    return (
      <ul className='location-list'>
        {this.props.locations.map(location =>
          <li
            key={location.name}
            className={'location-list-item ' + (location.selected ? 'location-list-item-selected' : '')}
            onClick={() => this.props.onLocationListItemClick(location)}
            >
            {location.name}
          </li>
        )}
      </ul>
    )
  }
}

export default LocationList;
