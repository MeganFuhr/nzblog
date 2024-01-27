import { useState } from "react";
import GetMap from "../components/GetMaps";
import CardModal from "./CardModal";

export default function card({
  title,
  coordinates,
  description,
  date,
  imagesCollection,
}) {
  const [showModal, setShowModal] = useState(false);
  const styleForCardMap = "card_map";
  const styleForBlogMap = "modal_map";

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="div_card">
      <div className="card_children">
        <h3 className="card_title" onClick={toggleShowModal}>
          {title}
        </h3>
        <h3 className="card_title" onClick={toggleShowModal}>
          {new Date(date).toLocaleDateString("en-us", options)}
        </h3>

        <img
          onClick={toggleShowModal}
          className="img_card"
          src={`${imagesCollection.items[0].url}?w=345&h=100&fit=fill`}
        ></img>
        {GetMap(coordinates.lon, coordinates.lat, styleForCardMap)}

        <p className="lonlat">
          <strong>Lon:</strong> {parseFloat(coordinates.lon).toFixed(2)}{" "}
          <strong>Lat:</strong> {parseFloat(coordinates.lat).toFixed(2)}
        </p>
      </div>
      <CardModal
        show={showModal}
        onCloseButtonClick={toggleShowModal}
        title={title}
        coordinates={coordinates}
        description={description}
        date={date}
        imagesCollection={imagesCollection}
        options={options}
        styleForBlogMap={styleForBlogMap}
      />
    </div>
  );
}
