import React, { Component } from "react";
import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, Searchbar } from "./Searchbar.Styled";
import { CiSearch } from 'react-icons/ci';

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleSearchQuery = event => {
    this.setState({ searchQuery: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel> <CiSearch/></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={this.state.searchQuery}
            onChange={this.handleSearchQuery}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

export default SearchBar;
