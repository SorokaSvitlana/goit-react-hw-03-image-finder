import { Component } from "react"

export class Searchbar extends Component {

  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    }


  render() {
return (<header>
<form onSubmit={this.handleSubmit}>
  <button type="submit">
    <span>Search</span>
  </button>

  <input
    type="text"
    autocomplete="off"
    autofocus
    placeholder="Search images and photos"
  />
</form>
</header>)} }