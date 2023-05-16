import React, { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import SearchBar from 'components/Searchbar/Searchbar';
import LoadMoreBtn from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    hits: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    searchQuery: '',
    status: 'idle',
    error: null,
  };

  componentDidMount() {
    this.fetchImages = () => {
      const { searchQuery, page, perPage } = this.state;
      this.setState({ status: 'pending', error: null });
      fetch(
        `https://pixabay.com/api/?key=34990122-c9c933059a0835fdbbbaed835&q=${searchQuery}&page=${page}&per_page=${perPage}`
      )
        .then(response => response.json())
        .then(data => {
          
          this.setState(prevState => ({
            hits: [...prevState.hits, ...data.hits],
            totalHits: data.totalHits,
            status: 'resolved',
          }));
        })
        .catch(error => {this.setState({status:'rejected', })});
    };
  }

  

  handleSubmit = searchValue => {
    this.setState({ searchQuery: searchValue, page: 1, hits: [] }, this.fetchImages);
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages();
      }
    );
  };

  render() {
    const { hits,status, totalHits, perPage, page } = this.state;

    return (
      <div>
        {status === 'pending' && <Loader/>}
        <SearchBar onSubmit={this.handleSubmit} />
        {hits.length > 0 && (
          <>
            <ImageGallery hits={hits} />
            {status === 'resolved' && totalHits >= page * perPage && (<LoadMoreBtn onClick={this.handleLoadMore} />)}            
          </>
        )}
      </div>
    );
  }
}
