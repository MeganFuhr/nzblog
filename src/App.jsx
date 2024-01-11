import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import useFetchData from "./hooks/useFetchData";
import axios from "axios";
import Card from "./components/Card";
// import query from "./queries/allEntries";

function App() {
  const [posts, setPosts] = useState([]);
  // const [count, setCount] = useState(0);
  // const { posts, isLoading, error } = useFetchData(null);
  // console.log(posts);

  const fetchData = async () => {
    const query = `query nzentryCollectionQuery {
  nzentryCollection {
    items {
      sys {
        id
      }
      title
      date
      coordinates {
        lat
        lon
      }
      description
      imagesCollection {
        total
        items {
          url
          title
          description
        }
      }
    }
  }
}
   `;
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_API}`,
    };
    const { data } = await axios({
      url: import.meta.env.VITE_CONTENTFUL_GRAPH_URL,
      method: "post",
      headers: headers,
      data: { query },
    });
    setPosts(data.data.nzentryCollection.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(`Title: ${posts[0].title}`);
  // console.log(`SysId: ${posts[0].sys.id}`);
  // console.log(`ImagesCollectionTotal: ${posts[0].imagesCollection.total}`);
  // console.log(`Description: ${posts[0].description}`);
  // console.log(`Date: ${posts[0].date}`);
  // console.log(
  //   `Coordinates: ${posts[0].coordinates.lat} ${posts[0].coordinates.lon}`
  // );
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
