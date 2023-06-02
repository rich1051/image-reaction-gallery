import React from "react";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";
import "./App.css";

function App() {
  const [gallery, setGallery] = useState([]);

  const getGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        // get list of creatures from server:
        setGallery(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  // onReady:
  useEffect(() => {
    getGallery();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div>
        {gallery.map((item) => (
          <GalleryList key={item.id} getGallery={getGallery} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
