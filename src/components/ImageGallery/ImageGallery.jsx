
import {GalleryList} from 'components/ImageGallery/ImageGallery.Styled'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'


 const ImageGallery = ({hits}) => {
    return (<GalleryList > 
       {hits.map(hit => (
            <ImageGalleryItem url={hit.webformatURL} key={hit.id}  />
          ))}
        </GalleryList>) }

export default ImageGallery