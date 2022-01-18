import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../Header/Header";
import { DropdownHeader } from "../Header/Dropdown";

import Bestseller1 from "../../Assets/Books/Bestsellerbuch1.jpeg";
import Bestseller2 from "../../Assets/Books/Bestsellerbuch2.jpeg";
import Bestseller3 from "../../Assets/Books/Bestsellerbuch3.jpeg";
import Empfehlung1 from "../../Assets/Books/1buch.jpeg";
import Empfehlung2 from "../../Assets/Books/2buch.jpeg";
import Empfehlung3 from "../../Assets/Books/3buch.jpeg";
import Empfehlung4 from "../../Assets/Books/4buch.jpeg";
import Beliebt1 from "../../Assets/Books/buch1.jpeg";
import Beliebt2 from "../../Assets/Books/buch2.jpeg";
import Beliebt3 from "../../Assets/Books/buch3.jpeg";
import Beliebt4 from "../../Assets/Books/buch4.jpeg";

const Headline = styled.h2`
  font-size: 12px;
  font-family: sofia-pro, sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
  @media (min-width: 800px) {
    font-size: 17px;
    margin-bottom: 25px;
  }
`;

const BestsellerWrapper = styled.div`
  padding: 20px;
  @media (min-width: 800px) {
    padding: 50px;
  }
`;

const CarouselBestseller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItemBestseller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    @media (min-width: 800px) {
      width: 60%;
    }
  }
`;
const CarouselItemBestsellerMiddle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120%;
    border: 4px solid #ff772f;
    border-radius: 3px;
    @media (min-width: 800px) {
      width: 70%;
    }
  }
`;

const RecomWrapper = styled.div`
  padding: 20px;
  background: #f5f5f5;
  @media (min-width: 800px) {
    padding: 50px;
  }
`;

const PopularWrapper = styled.div`
  padding: 20px;
  background: #f5f5f5;
  @media (min-width: 800px) {
    padding: 50px;
  }
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5;
  img {
    width: 100%;
    @media (min-width: 800px) {
      width: 70%;
    }
  }
`;
const CarouselItemMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5;
  img {
    width: 100%;
    @media (min-width: 800px) {
      width: 70%;
    }
  }
`;

const CarouselItemAnzeige = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5;

  img {
    width: 100%;
    position: relative;
    @media (min-width: 800px) {
      width: 70%;
    }
  }

  h2 {
    position: absolute;
    background: #f5f5f5ad; /* Black background with 0.5 opacity */
    color: #000;
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 12px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    @media (min-width: 800px) {
      font-size: 17px;
    }

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #f5f5f5; /* Black background with 0.5 opacity */
    }
  }
`;

const CarouselText = styled.div`
  width: 100%;
  margin-top: 15px;
  @media (min-width: 800px) {
    margin-top: 35px;
  }
`;
const CarouTxt = styled.div`
  padding-left: 3px;
  padding-right: 7px;
  text-align: center;
  h2 {
    color: #000;
    font-size: 12px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    margin: 0;
    @media (min-width: 800px) {
      font-size: 17px;
    }
  }
  h3 {
    color: #707070;
    font-size: 12px;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    margin-bottom: 3px;
    @media (min-width: 800px) {
      font-size: 17px;
    }
  }
  p {
    color: #ff772f;
    font-size: 12px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    margin: 0;
    @media (min-width: 800px) {
      font-size: 17px;
    }
  }
`;

export const OverviewPage = () => {

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
      <Header />
      <DropdownHeader />
      <BestsellerWrapper>
        <Headline>Bestseller</Headline>
        <CarouselBestseller className="row">
          <CarouselItemBestseller className="col-4">
            <img src={Bestseller1} alt="Bestseller1" />
          </CarouselItemBestseller>
          <CarouselItemBestsellerMiddle to="/detail" className="col-4">
            <img src={Bestseller2} alt="Bestseller2" />
          </CarouselItemBestsellerMiddle>
          <CarouselItemBestseller className="col-4">
            <img src={Bestseller3} alt="Bestseller3" />
          </CarouselItemBestseller>
        </CarouselBestseller>
      </BestsellerWrapper>

      <RecomWrapper>
        <Headline>Für dich empfohlen</Headline>
        <Carousel className="row">
          <CarouselItem className="col-3">
            <img src={Empfehlung1} alt="Empfehlungen1" />
          </CarouselItem>
          <CarouselItemMiddle className="col-3">
            <img src={Empfehlung2} alt="Empfehlungen2" />
          </CarouselItemMiddle>
          <CarouselItem className="col-3">
            <img src={Empfehlung3} alt="Empfehlungen3" />
          </CarouselItem>
          <CarouselItemAnzeige className="col-3">
            <img src={Empfehlung4} alt="Empfehlungen4" />
            <h2>
              mehr <br /> Anzeigen
            </h2>
          </CarouselItemAnzeige>
          <CarouselText className="row">
            <CarouTxt className="col-3">
              <h2>Küpfel Kobr Funkenmord</h2>
              <h3>Volker Klüpfel</h3>
              <p>12 EUR</p>
            </CarouTxt>
            <CarouTxt className="col-3">
              <h2>Geschichte von PaSalt</h2>
              <h3>Lucinda Riley</h3>
              <p>15 EUR</p>
            </CarouTxt>
            <CarouTxt className="col-3">
              <h2>Herren von Winterfell</h2>
              <h3>George Martin</h3>
              <p>11 EUR</p>
            </CarouTxt>
            <CarouTxt className="col-3"></CarouTxt>
          </CarouselText>
        </Carousel>
      </RecomWrapper>
      <PopularWrapper>
        <Headline>Beliebt diesen Monat</Headline>
        <Carousel className="row">
          <CarouselItem className="col-3">
            <img src={Beliebt1} alt="Bliebt1" />
          </CarouselItem>
          <CarouselItemMiddle className="col-3">
            <img src={Beliebt2} alt="Beliebt2" />
          </CarouselItemMiddle>
          <CarouselItem className="col-3">
            <img src={Beliebt3} alt="Beliebt3" />
          </CarouselItem>
          <CarouselItemAnzeige className="col-3">
            <img src={Beliebt4} alt="Beliebt4" />
            <h2>
              mehr <br /> Anzeigen
            </h2>
          </CarouselItemAnzeige>
          <CarouselText className="row">
            <CarouTxt className="col-3">
              <h2>Ostfriesen Grab</h2>
              <h3>Klaus-Peter Wolf</h3>
              <p>16 EUR</p>
            </CarouTxt>
            <CarouTxt className="col-3">
              <h2>Selection Roman</h2>
              <h3>Kiera Victoria Cass</h3>
              <p>13 EUR</p>
            </CarouTxt>
            <CarouTxt className="col-3">
              <h2>Ostfriesen Sturm</h2>
              <h3>Klaus-Peter Wolf</h3>
              <p>16 EUR</p>
            </CarouTxt>
            <CarouTxt className="col-3"></CarouTxt>
          </CarouselText>
        </Carousel>
      </PopularWrapper>
    </>
  );
};
