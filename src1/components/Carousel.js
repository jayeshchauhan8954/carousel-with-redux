// Carousel.js

import React from 'react';
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../redux/actions';

const Carousel = ({ currentIndex, images, nextImage, prevImage }) => {
  return (
    <div className="carousel">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="button-container">
        <button onClick={prevImage}>Back</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentIndex: state.currentIndex,
  images: state.images
});

const mapDispatchToProps = {
  nextImage,
  prevImage
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
