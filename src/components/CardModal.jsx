import React, { useState } from "react";
import ReactDom from "react-dom";
// import Loading from "./Loading";

export default function ImageModal({ show, onCloseButtonClick }) {
  //   description,
  //   title,
  //   date,
  //   setIsOpen,
  //   imagesCollection,
  //   onClose,

  //   const [loaded, setLoaded] = useState(false);

  if (!show) return null;
  return ReactDom.createPortal(
    <div className="modal__overlay" onClick={onCloseButtonClick}>
      Hello World!
    </div>,
    document.body
  );
}
