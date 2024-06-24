import React from 'react';
import { useSelector } from 'react-redux';

const Image = () => {
  const images = useSelector((state) => state.images);
  const currentIndex = useSelector((state) => state.currentIndex);

  return (
    <div className="image-container">
      <img src={images[currentIndex]} alt="carousel" />
    </div>
  );
};

export default Image;
