import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class App extends Component {
  state = {
    hits: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          {this.state.hits.map(hit => (
            <ImageGalleryItem
              url={hit.webformatURL}
              key={hit.id}
            />
          ))}
        </ImageGallery>
        {/* Add other components here */}
      </div>
    );
  }
}
