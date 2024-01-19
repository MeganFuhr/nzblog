import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import allEntries from "./queries/allEntries";
import { useFetchData } from "./hooks/useFetchData";
import PrimaryGallery from "./components/PrimaryGallery";
import { useState } from "react";
function App() {
  const posts = useFetchData(allEntries);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  posts.sort((a, b) => {
    //sort by date
    return new Date(a.date) - new Date(b.date);
  });

  let images = [];
  posts.map((p) => {
    // get just image urls for gallery
    p.imagesCollection.items.map((i) =>
      images.push({
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
      <div>
        {/* <iframe
          width="560"
          height="315"
          src="https://drive.google.com/file/"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
      </div>
      <div className="div-gallery">
        {!isGalleryVisible && (
          <h1>
            <a
              className="gallery_link"
              href="#"
              onClick={() => setIsGalleryVisible(!isGalleryVisible)}
            >
              Show Full Gallery
            </a>
          </h1>
        )}
        {isGalleryVisible && (
          <h1>
            <a
              className="gallery_link"
              href="#"
              onClick={() => setIsGalleryVisible(!isGalleryVisible)}
            >
              Hide Full Gallery
            </a>
            <PrimaryGallery images={images} />
          </h1>
        )}

        {/* <Routes>
          <Route path="gallery" element={<Gallery images={images} />} />
        </Routes> */}
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
