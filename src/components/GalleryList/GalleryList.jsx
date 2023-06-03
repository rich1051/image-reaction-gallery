import { useState } from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({gallery, getGallery}) {

  return (
    <div className='GalleryListDiv'>
        {gallery.map((item) => (
          <GalleryItem key={item.id} getGallery={getGallery} item={item} />
        ))}
      </div>
  )
   
}

export default GalleryList;
