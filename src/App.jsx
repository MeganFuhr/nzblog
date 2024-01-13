import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import allEntries from "./queries/allEntries";
import { useFetchData } from "./hooks/useFetchData";
import Gallery from "./components/Gallery";

function App() {
  const posts = useFetchData(allEntries);

  posts.sort((a, b) => {
    //sort by date
    return new Date(a.date) - new Date(b.date);
  });

  let images = [];
  posts.map((p) => {
    // get just image urls for gallery
    p.imagesCollection.items.map((i) =>
      images.push({
        // id: index,
        original: i.url,
        thumbnail: `${i.url}?w=250&h=150`,
      })
    );
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
      <Gallery images={images} />
    </>
  );
}

export default App;
