import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.Styled"

import React, { Component } from 'react';
import ModalPage from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props;
    const { isOpen } = this.state;
    
    return (
        <>
      <GalleryItem onClick={this.openModal}>
        <GalleryItemImage  src={webformatURL} alt={tags} />
        </GalleryItem>
        {isOpen && (
           <ModalPage closeModal={this.closeModal}>
           <img src={largeImageURL} alt={tags} />
         </ModalPage>
         
        )}
     </>
    );
  }
}

export default ImageGalleryItem;



// export const ImageGalleryItem = ({url}) => {
// return (<GalleryItem>
// <GalleryItemImage src={url} alt="" width="200" height="200"/>
// </GalleryItem> )}