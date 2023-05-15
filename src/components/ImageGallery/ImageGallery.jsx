import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";


export class ImageGallery extends Component {
    state = {
        hits: [],
        page: 1,
        perPage: 12,
        totalHits: 0,
        searchQuery: '',
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
    
    return (<ul > {this.state.hits.map(hits => 
        <ImageGalleryItem
                url={hits.webformatURL}  key={hits.id} /> )}
        </ul>)
}
}
