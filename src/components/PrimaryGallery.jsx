import ImageGallery from "react-image-gallery";

export default function PrimaryGallery({ images }) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <ImageGallery items={images} />
    </div>
  );
}
