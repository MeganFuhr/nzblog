import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import useFetchData from "./hooks/useFetchData";
import axios from "axios";
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

  console.log(posts);

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
