import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import allEntries from "./queries/allEntries";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const posts = useFetchData(allEntries);

  posts.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

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
        {posts.map((p) => (
          <Card {...p} key={p.sys.id} />
        ))}
      </div>
    </>
  );
}

export default App;
