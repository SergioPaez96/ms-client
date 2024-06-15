import React, { useState } from "react";

import "./Carousel.scss";

export function Carousel({ images }) {
  const [actualImage, setActualImage] = useState(0);

  return (
    <div className="carousel-container">
      {images.map((image, index) => {
        return (
          <div>
            {actualImage === index && (
              <img className="carousel__image" key={index} src={image} alt="minisquadpy" />
            )}
          </div>
        );
      })}
    </div>
  );
}
