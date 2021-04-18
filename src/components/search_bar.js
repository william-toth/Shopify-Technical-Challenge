import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
  }

  // eslint-disable-next-line class-methods-use-this
  onInputChange = (event) => {
    this.props.onSearchChange(event.target.value);
    this.setState({ searchterm: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
