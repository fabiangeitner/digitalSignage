import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Slider.css";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SliderData } from "./SliderData";

export const Slideshow = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      if (localStorage.getItem('changeView')) {
        navigate(`/${localStorage.getItem('changeView')}`, {replace: true}); //eslint-disable-line
      }
    })
  })

  return (
    <>
      <div className="containerTest">
        {/* Anzeigeintervall in ms */}
        <Carousel controls={false} indicators={false} interval="7000">
          {SliderData.map((slide) => (
            <Carousel.Item className="col text-center">
              <img
                className="screensImg"
                src={slide.image}
                alt={slide.imageInfo}
              />
              <Link to="/welcome" className="qrCode">
                <img
                  src="https://www.kaspersky.de/content/de-de/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
                  alt=""
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};
