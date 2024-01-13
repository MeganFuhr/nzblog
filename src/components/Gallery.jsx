import ImageGallery from "react-image-gallery";

export default function Gallery({ images }) {
  // console.log(images);
  return <ImageGallery items={images} />;
}
