import React, { Component } from "react";

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQuery = event => {
    this.setState({ searchQuery: event.target.value.toLowerCase() })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      return;
    }

    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={this.state.searchQuery}
            onChange={this.handleSearchQuery}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
