import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilter extends Component {
  render() {
    return (
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search Location'
          value={this.props.searchText}
          onChange={event => this.props.onSearchTextChange(event.target.value)}
          className='search-input'
          aria-label='Search Location'
        />
      </div>
    );
  }
}

SearchFilter.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired
};

export default SearchFilter;
