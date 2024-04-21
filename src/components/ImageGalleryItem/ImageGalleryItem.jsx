import React from 'react';
import '../ImageGallery/ImageGallery.css'; 

const ImageGalleryItem = ({ src, alt, largeImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItem-image" data-source={largeImage} />
    </li>
  );
};

export default ImageGalleryItem;
