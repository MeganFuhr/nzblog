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
          <h3>hello, new zealand</h3>
          <h3>Full Gallery</h3>
        </div>
      </div>

      <div className="div_cardContainer">
        <div className="div_card">one</div>
        <div className="div_card">two</div>
        <div className="div_card">three</div>
        <div className="div_card">four</div>
        <div className="div_card">five</div>
        <div className="div_card">six</div>
        <div className="div_card">seven</div>
        <div className="div_card">eight</div>
      </div>
    </>
  );
}

export default App;
