import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ item, getGallery }) {
  const [selected, setSelected] = useState(false);

  const handleLike = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log("problems", error);
      });

    // axios put to bookmark so it stores in the database (boolean in db)
    // axios.put(`/creature/bookmark/${creature.id}).then(...)
  };

  console.log();

  return (

    <div className="full-post">
      {/* notice this button only impacts the text on click! */}
      <div onClick={() => setSelected(!selected)}>
        <div className="hidden-border">
        <div className="description-image">
          {selected ? (
            // if selected is true, render this:
            <p className="description">{item.description}</p>
          ) : (
            // if selected is false, render this:
            <img className="image" src={item.path} />
          )}
        </div>
        </div>
      </div>
      {/* notice this button only impacts the bookmark button! */}
      <button onClick={() => handleLike(item.id)}>Like!</button>
      <p className="likes-description">{item.likes} people have liked this!</p>
    </div>
  );
}

export default GalleryItem;
