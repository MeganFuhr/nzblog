import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./data/sample.json";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  console.log(data);

  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>hello, new zealand</h1>
        </div>
      </div>
      <div className="div-gallery">
        <h3>
          <a href="#gallery" className="gallery-link">
            Full Gallery
          </a>
        </h3>
        <p></p>
      </div>

      <div className="div_cardContainer">
        <div className="div_card">
          <p>one</p>
        </div>
        <div className="div_card">
          <p>two</p>
        </div>
        <div className="div_card">
          <p>three</p>
        </div>
        <div className="div_card">
          <p>four</p>
        </div>
        <div className="div_card">
          <p>five</p>
        </div>
        <div className="div_card">
          <p>six</p>
        </div>
        <div className="div_card">
          <p>seven</p>
        </div>
        <div className="div_card">
          <p>eight</p>
        </div>
      </div>
    </>
  );
}

export default App;
