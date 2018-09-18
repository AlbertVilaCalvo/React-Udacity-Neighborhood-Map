import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LocationList extends Component {
  render() {
    return (
      <ul className='location-list'>
        {this.props.locations.map(location =>
          <li
            key={location.name}
            className={'location-list-item ' + (location.selected ? 'location-list-item-selected' : '')}
            onClick={() => this.props.onLocationListItemClick(location)}
            tabIndex='0'
            role='button'
            >
            {location.name}
          </li>
        )}
      </ul>
    )
  }
}

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLocationListItemClick: PropTypes.func.isRequired
};

export default LocationList;
