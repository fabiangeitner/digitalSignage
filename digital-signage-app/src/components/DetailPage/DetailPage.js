import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header } from "../Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../Assets/Book-IfIStay.png";
import stars from "../../Assets/stars.png";
import heart from "../../Assets/heart.png";

const ContainerTest = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  font-family: "Sofia Pro";
  font-weight: bold;
  color: black;
  height: 75vh;
  .book {
    height: 40%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

const ImageStars = styled.div`
  text-align: right;
  margin-right: 5vw;
  @media (min-width: 800px) {
    margin-right: 15vw;
  }
  .stars {
    height: 3vh;
  }
`;

const WrapperText = styled.div`
  background-color: #EDEDED;
  margin-top: 30vh;
  padding-top: 3.5vh;
  border-radius: 10px;
  width: 90%;
  @media (min-width: 800px) {
    width: 70%;
  }
  margin-right: auto;
  margin-left: auto;

  h2 {
    font-family: "Sofia Pro";
    font-weight: bold;
    font-size: 25px;
    @media (min-width: 800px) {
      font-size: 30px;
    }
    margin-bottom: 1vh;
    text-align: center;
  }

  p {
    font-family: "Sofia Pro";
  }

  .heart {
    height: 4vh;
    margin-left: 83%;
    left: 0;
    right: 0;
    text-align: right;
  }
  #subtitle {
    color: #707070;
    font-weight: normal;
    font-size: 12px;
    @media (min-width: 800px) {
      font-size: 17px;
    }
    margin-bottom: 0.5vh;
    text-align: center;
  }

  #price {
    color: #FF772F;
    font-weight: bold;
    font-size: 15px;
    @media (min-width: 800px) {
      font-size: 20px;
    }
    margin-bottom: 0.5vh;
    text-align: center;
  }

  #description {
    color: #000000;
    font-weight: 100;
    font-size: 15px;
    @media (min-width: 800px) {
      font-size: 20px;
    }
    text-align: left;
    padding-left: 5vw;
    padding-right: 5vw;
    margin-bottom: 0.7vh;
  }

  #addOn {
    color: #000000;
    font-weight: bold;
    font-size: 15px;
    @media (min-width: 800px) {
      font-size: 20px;
    }
    padding-left: 5vw;
    padding-bottom: 3vw;
    text-align: left;
  }
`;

const FooterFilliale = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5.5vh;
  text-align: center;
  p {
    color: #23645d;
    font-weight: bold;
    font-size: 15px;
    @media (min-width: 800px) {
      font-size: 20px;
    }
  }
`;

export const DetailPage = () => {
  return (
    <>
      <ContainerTest>
        <Header/>
        <Content>
          <ImageStars>
            <img 
                className="stars mt-2"
                src={stars}
                alt="Sterne Bewertung"
            />
          </ImageStars>
          <img
            className="book my-2"
            src={book}
            alt="Buch groß"
          />
          <WrapperText>
            <img
              className="heart my-1"
              src={heart}
              alt="favoriten"
            />
            <h2 class="">If I stay</h2>
            <p id="subtitle">368 Seiten, Taschenbuch, 2011</p>
            <p id="price">15 EUR</p>
            <p id="description">Innerhalb eines Wimpernschlags ändert sich alles. Die siebzehnjährige Mia hat keine Erinnerung an den Unfall; sie kann sich nur daran erinnern, was danach geschah, als sie sah, wie ihr eigener beschädigter Körper aus dem Wrack geholt wurde. Nach und nach kämpft sie darum...</p>
            <p id="addOn">weiterlesen…</p>
          </WrapperText>
        </Content>
        <FooterFilliale>
            <p>In dieser Filliale verfügbar</p>
        </FooterFilliale>
      </ContainerTest>
    </>
  );
};
