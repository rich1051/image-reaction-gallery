import { useState } from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({item, getGallery}) {
  const [selected, setSelected] = useState(false);

  const handleLike = () => {
    console.log("You want to like this!");
    // axios put to bookmark so it stores in the database (boolean in db)
    // axios.put(`/creature/bookmark/${creature.id}).then(...)
  };

  console.log();

  return (
    <>
      {/* notice this button only impacts the text on click! */}
      <div onClick={() => setSelected(!selected)}>
        {selected ? (
          // if selected is true, render this:
          <img className="image" src={item.path} />
        ) : (
          // if selected is false, render this:
          <p className="caption">{item.description}</p>
        )}
      </div>
      {/* notice this button only impacts the bookmark button! */}
      <button onClick={handleLike}>Like!</button>
      <p>{item.likes} people have liked this!</p>
    </>
  );
}

export default GalleryList;
