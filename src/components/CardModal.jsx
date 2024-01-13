import React, { useState } from "react";
import ReactDom from "react-dom";
// import Loading from "./Loading";
import GetMap from "./GetMaps";
import BlogGallery from "./BlogGallery";

export default function ImageModal({
  show,
  onCloseButtonClick,
  title,
  coordinates,
  description,
  date,
  imagesCollection,
  options,
  styleForBlogMap,
}) {
  //   const [loaded, setLoaded] = useState(false);
  // const images = imagesCollection.map((i)=> {
  //   return
  // })
  console.log(imagesCollection);

  let images = [];
  imagesCollection.items.map((i) => {
    images.push({
      original: i.url,
      thumbnail: `${i.url}?w=250&h=150`,
    });
  });

  if (!show) return null;
  return ReactDom.createPortal(
    <div className="modal__overlay">
      <div className="modal__content">
        <h3
          style={{ textAlign: "right", marginRight: "1rem" }}
          onClick={onCloseButtonClick}
        >
          Close Window
        </h3>
        <h3>
          {title} - {new Date(date).toLocaleDateString("en-us", options)}
        </h3>

        {GetMap(coordinates.lon, coordinates.lat, styleForBlogMap)}
        <p>
          <strong>Lon:</strong> {parseFloat(coordinates.lon).toFixed(2)}{" "}
          <strong>Lat:</strong> {parseFloat(coordinates.lat).toFixed(2)}
        </p>
        <BlogGallery images={images} />
        <p>{description}</p>
      </div>
    </div>,
    document.body
  );
}
