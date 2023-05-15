import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.Styled"

export const ImageGalleryItem = ({url}) => {
return (<GalleryItem>
<GalleryItemImage src={url} alt="" width="200" height="200"/>
</GalleryItem> )}