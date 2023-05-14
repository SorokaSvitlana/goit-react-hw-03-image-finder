import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    hits: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    searchQuery: 'cat',
  };

  componentDidMount() {
    const { searchQuery, page, perPage } = this.state;
    fetch(`https://pixabay.com/api/?key=34990122-c9c933059a0835fdbbbaed835&q=${searchQuery}&page=${page}&per_page=${perPage}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          hits: data.hits,
          totalHits: data.totalHits,
        })})
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Searchbar />
        {/* Add other components here */}
      </div>
    );
  }
}
