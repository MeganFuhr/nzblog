import React from "react";
import GetMap from "../components/GetMaps";

export default function card({
  title,
  coordinates,
  description,
  date,
  imagesCollection,
}) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="div_card">
      <div className="card_children">
        <h3>
          {title} - {new Date(date).toLocaleDateString("en-us", options)}
        </h3>
        <p>
          <strong>Lon:</strong> {parseFloat(coordinates.lon).toFixed(2)}{" "}
          <strong>Lat:</strong> {parseFloat(coordinates.lat).toFixed(2)}
        </p>
        <p></p>
        <img
          className="img_card"
          src={`${imagesCollection.items[0].url}?w=345&h=100&fit=fill`}
        ></img>
        {GetMap(coordinates.lon, coordinates.lat)}
        <p>{title}</p>
      </div>

      {/* <p>{description}</p> */}
    </div>
  );
}
