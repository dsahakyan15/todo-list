import { Component } from 'react'

import './search.css';

class Search extends Component {

  onInputChange = (event) => {
    const text = event.target.value;
    const { handleSearch } = this.props

    console.log(handleSearch(text))
  }

  render() {



    return (
      <div className='search'>
        <input
          type="text"
          placeholder="Type text for search..."
          onChange={this.onInputChange}
        />
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done'>Done</button>
        <button className='search-btn-important'>Important</button>
      </div>
    );
  }

}

export default Search;