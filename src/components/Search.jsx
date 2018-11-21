import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  submitSearch = event => {
    // Make API Call
    const searchValue = this.state.searchValue;
    if (event.key === "Enter" && searchValue.length > 0) {
      event.preventDefault();
      this.props.submitSearch(searchValue);
    }
    return;
  };

  handleChange = event => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  };

  render() {
    return (
      <form>
        <input
          type="search"
          value={this.state.searchValue}
          onChange={this.handleChange}
          onKeyPress={this.submitSearch}
        />
      </form>
    );
  }
}

Search.propTypes = {};

export default Search;
