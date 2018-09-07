import React, { Component } from 'react';

class SearchFilter extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    // console.log('query: ' + query);
    this.setState({ query });
  }

  render() {
    return (
      <div className='search-container'>
        <input
          type='text'
          placeholder='Station location'
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
          className='search-input'
        />
        <button className='search-button'>Filter</button>
      </div>
    );
  }
}

export default SearchFilter;
