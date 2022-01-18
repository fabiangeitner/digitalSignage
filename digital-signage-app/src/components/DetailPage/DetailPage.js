import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../Assets/Books/Bestsellerbuch2.jpeg";
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
    height: 35%;
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

const LinkTo = styled(Link)``;

const WrapperText = styled.div`
  background-color: #ededed;
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
    color: #ff772f;
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
      <ContainerTest>
        <Header />
        <Content>
          <ImageStars>
            <LinkTo to="/review">
              <img className="stars mt-2" src={stars} alt="Sterne Bewertung" />
            </LinkTo>
          </ImageStars>
          <LinkTo to="/cart">
            <img className="book my-2" src={book} alt="Buch groß" />
          </LinkTo>
          <WrapperText>
            <img className="heart my-1" src={heart} alt="favoriten" />
            <h2 class="">Mein Kopf, ein Universum</h2>
            <p id="subtitle">272 Seiten, Taschenbuch, 2021</p>
            <p id="price">15 EUR</p>
            <p id="description">
              Einzigartig turbulent und auf ungewöhnliche Weise wunderbar
              normal. So würde ich mein Leben beschreiben, wenn ich einen Satz
              zur Verfügung hätte. Doch ich habe ein ganzes Buch! Ich nehme dich
              Kapitel für Kapitel mit in mein Universum und erzähle dir, wie ich
              mir seit meiner Kindheit Wünsche...
            </p>
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
