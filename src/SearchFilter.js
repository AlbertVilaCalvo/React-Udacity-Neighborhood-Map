import React, { Component } from 'react';

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
        />
      </div>
    );
  }
}

export default SearchFilter;
