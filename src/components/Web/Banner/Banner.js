import React, { useState, useEffect, useRef } from "react";
import { Button, Icon, Image } from "semantic-ui-react";

import Remera from "../../../assets/jpg/carrusel/remeras_personalizadas.jpg";
import Taza from "../../../assets/jpg/carrusel/tazas_personalizadas.jpg";
import Sticker from "../../../assets/jpg/carrusel/stickers.jpg";

import "./Banner.scss";

export function Banner() {
  const images = [Remera, Taza, Sticker];
  const [actualImage, setActualImage] = useState(0);

  const next = () => {
    setActualImage(actualImage === cantidad - 1 ? 0 : actualImage + 1);
  };

  const previous = () => {
    setActualImage(actualImage === 0 ? cantidad - 1 : actualImage - 1);
  };

  const cantidad = images?.length;
  if (!Array.isArray(images) || cantidad === 0) return;

  return (
    <div className="home-banner">
      <div className="home-banner__left">
        <div className="home-banner__left-bienve">
          <h1>
            Bienvenido/a a la tienda virtual de <span>Mini Squad Py</span>
          </h1>

          <p>
            Desde aqui podras realizar tus pedidos de los productos
            personalizados que necesites.
          </p>

          <Button primary onClick={() => console.log("Ver productos")}>
            Ver productos
          </Button>
        </div>
      </div>

      <div className="home-banner__right">
        <div className="home-banner__right-carrusel">
          <div className="arrow-left" onClick={previous}>
            &#10092;
          </div>

          <div className="arrow-right" onClick={next}>
            &#10093;
          </div>
          {images.map((image, index) => {
            return (
              <div>
                {actualImage === index && (
                  <img
                    className="carrusel-image"
                    key={index}
                    src={image}
                    alt="minisquadpy"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
