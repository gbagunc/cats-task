import React from 'react';
import './index.css';

const Images = ({ images }) => {
  return (
    <div className="images-wrapper">
      {images.map((img) => {
        return (
          <div className="image-item" key={img.id}>
            <img src={img.url} alt="#" />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
