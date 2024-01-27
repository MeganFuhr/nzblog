import React, { useState } from "react";
import ReactDom from "react-dom";
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
  let images = [];
  imagesCollection.items.map((i) => {
    images.push({
      original: i.url,
      thumbnail: `${i.url}?w=250&h=150`,
    });
  });

  const blogDescription = (words) => {
    const content = words.split("\n");

    return (
      <div>
        {content.map((word, index) => (
          <p className="modal_para" key={index}>
            {word}
          </p>
        ))}
      </div>
    );
  };

  if (!show) return null;
  return ReactDom.createPortal(
    <div className="modal__overlay">
      <div className="modal__content">
        <h3 className="modal_close_link" onClick={onCloseButtonClick}>
          <p>Close Window</p>
        </h3>
        <h1 className="modal_title">
          {title} - {new Date(date).toLocaleDateString("en-us", options)}
        </h1>
        {GetMap(coordinates.lon, coordinates.lat, styleForBlogMap)}
        <p className="modal_lonlat">
          <strong>Lon:</strong> {parseFloat(coordinates.lon).toFixed(2)}{" "}
          <strong>Lat:</strong> {parseFloat(coordinates.lat).toFixed(2)}
        </p>
        <BlogGallery images={images} />
        {blogDescription(description)}
        <h3 className="modal_close_link" onClick={onCloseButtonClick}>
          <p>Close Window</p>
        </h3>
      </div>
    </div>,
    document.body
  );
}
