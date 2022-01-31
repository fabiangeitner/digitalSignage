import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import QRCodeImg from "../../Assets/QRCode.png";
import "./Slider.css";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SliderData } from "./SliderData";

const QRCode = styled.div`
  height: 90px;
  width: 90px;
  background-image: url(${QRCodeImg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  bottom: 85px;
  right: 25px;
  position: absolute;
`;

export const Slideshow = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      if (localStorage.getItem("changeView")) {
        navigate(`/${localStorage.getItem("changeView")}`, { replace: true }); //eslint-disable-line
      }
    });
  });

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
                <QRCode img src={slide.image} alt={slide.imageInfo} />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};
