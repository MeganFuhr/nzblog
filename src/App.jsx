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
      <div className="div_nav">
        <p className="p_title">hello, new zealand</p>
        <p className="p_title">
          <a className="a_title" href="#gallery">
            View Full Gallery
          </a>
        </p>
      </div>
      <div className="wrapper">
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
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
