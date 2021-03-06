import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../Assets/Books/buch4.jpeg";
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
        if (localStorage.getItem('changeView') === 'cart-pay') {
          localStorage.setItem('changeView', 'cart');
          navigate(`/${localStorage.getItem('changeView')}`, {replace: true}); //eslint-disable-line
        } else {
          navigate(`/${localStorage.getItem('changeView')}`, {replace: true}); //eslint-disable-line
        }
      }
      if (localStorage.getItem('direction-basket')) {
        //Variablen zur Positionsbestimmung
        let positionVertic = 1;
        let direction = localStorage.getItem('direction-basket');

        //gab es bereits eine Position
        if(localStorage.getItem('position-vertical')) {
          positionVertic = Number(localStorage.getItem('position-vertical'));
        }

        localStorage.clear();

        //aktuellen Rahmen eines Bildes entfernen
        let image = document.getElementById(`position${positionVertic}`);
        image.style.border = '';
        image.style.borderRadius = '';

        //Position je nach Richtung anpassen
        switch (direction) {
          case 'top':
            if ( positionVertic !== 0) {
              positionVertic = positionVertic - 1 ;
            }
            break;
          case 'bottom': 
            if (positionVertic !== 2) {
              positionVertic = positionVertic + 1;
            }
            break;
        }

        //neues Bild Rahmen hinzuf??gen
        document.getElementById(`position${positionVertic}`).style.border = '4px solid #ff772f';
        document.getElementById(`position${positionVertic}`).style.borderRadius = '3px';

        //Position speichern
        localStorage.setItem('position-vertical', positionVertic);
      }
      if (localStorage.getItem('submit-basket')) {
        //Variablen zur Positionsbestimmung
        let positionVertic = 1;

        //gab es bereits eine Position
        if(localStorage.getItem('position-vertical')) {
          positionVertic = Number(localStorage.getItem('position-vertical'));
        }

        localStorage.clear();

        if (positionVertic === 0) {
          localStorage.setItem('changeView', 'review')
          navigate(`/${localStorage.getItem('changeView')}`, {replace: true}); //eslint-disable-line
        } else {
          //Position speichern
          localStorage.setItem('position-vertical', positionVertic);
        }
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
              <img className="stars mt-2" src={stars} alt="Sterne Bewertung" id='position0'/>
            </LinkTo>
          </ImageStars>
          <LinkTo to="/cart">
            <img className="book my-2" src={book} alt="Buch gro??" id='position1' style={{border: "4px solid #ff772f", borderRadius: "3px"}}/>
          </LinkTo>
          <WrapperText>
            <img className="heart my-1" src={heart} alt="favoriten" id='position2'/>
            <h2 class="">Mein Kopf, ein Universum</h2>
            <p id="subtitle">272 Seiten, Taschenbuch, 2021</p>
            <p id="price">15 EUR</p>
            <p id="description">
              Einzigartig turbulent und auf ungew??hnliche Weise wunderbar
              normal. So w??rde ich mein Leben beschreiben, wenn ich einen Satz
              zur Verf??gung h??tte. Doch ich habe ein ganzes Buch! Ich nehme dich
              Kapitel f??r Kapitel mit in mein Universum und erz??hle dir, wie ich
              mir seit meiner Kindheit W??nsche...
            </p>
            <p id="addOn">weiterlesen???</p>
          </WrapperText>
        </Content>
        <FooterFilliale>
          <p>In dieser Filliale verf??gbar</p>
        </FooterFilliale>
      </ContainerTest>
    </>
  );
};
