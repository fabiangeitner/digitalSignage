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
      if (localStorage.getItem('direction')) {
        //Variablen zur Positionsbestimmung
        let positionVertic = 1;
        let positionHoriz = 1;
        let direction = localStorage.getItem('direction');
        let showCategories = null;
        let category = -1;

        //gab es bereits eine Position
        if(localStorage.getItem('position-vertical')) {
          positionVertic = Number(localStorage.getItem('position-vertical'));
        }
        if (localStorage.getItem('position-horizontal')) {
          positionHoriz = Number(localStorage.getItem('position-horizontal'));
        }
        if (localStorage.getItem('showCategories')) {
          showCategories = localStorage.getItem('showCategories');
        }
        if (localStorage.getItem('category')) {
          category = Number(localStorage.getItem('category'));
        }

        localStorage.clear();

        //wenn Dropdown ausgewaehlt ist wird die normale Steurung deaktiviert und die Kategorien koennen gesteuert werden
        if (showCategories === 'true') {
          //aktuellen Rahmen der Kategorie entfernen außer das Dropdown an sich
          if (category !== -1) {
            let borderCategory = document.getElementById(`category${category}`);
            borderCategory.style.border = '';
            borderCategory.style.borderRadius = '';
          }
          
          switch (direction) {
            case 'top':
              if ( category !== -1 ) {
                category = category - 1 ;
              }
              break;
            case 'bottom': 
              if (category !== 5) {
                category = category + 1;
              }
              break;
          }

          if (category !== -1) {
            document.getElementById(`category${category}`).style.border = '4px solid #ff772f';
            document.getElementById(`category${category}`).style.borderRadius = '3px';
          }

          localStorage.setItem('showCategories', showCategories);
          localStorage.setItem('category', category);
          localStorage.setItem('position-horizontal', positionHoriz);
          localStorage.setItem('position-vertical', positionVertic);
        } else {
          //aktuellen Rahmen eines Bildes entfernen
          let image = document.getElementById(`position${positionVertic}-${positionHoriz}`);
          image.style.border = '';
          image.style.borderRadius = '';

          //Position je nach Richtung anpassen
          switch (direction) {
            case 'top':
              if ( positionVertic !== 0) {
                positionVertic = positionVertic - 1 ;
                if (positionVertic === 1) {
                  positionHoriz = 1;
                } else {
                  positionHoriz = 0;
                }
              }
              break;
            case 'bottom': 
              if (positionVertic !== 3) {
                positionVertic = positionVertic + 1;
                if (positionVertic === 1) {
                  positionHoriz = 1;
                } else {
                  positionHoriz = 0;
                }
              }
              break;
            case 'right': 
              if (positionVertic !== 0) {
                if (positionHoriz !== 2) {
                  positionHoriz = positionHoriz + 1;
                }
              } else {
                positionHoriz = 0
              }
              break;
            case 'left': 
              if (positionVertic !== 0) {
                if (positionHoriz !== 0) {
                  positionHoriz = positionHoriz - 1;
                }
              } else {
                positionHoriz = 0
              }
              break;
          }

          //neues Bild Rahmen hinzufügen
          document.getElementById(`position${positionVertic}-${positionHoriz}`).style.border = '4px solid #ff772f';
          document.getElementById(`position${positionVertic}-${positionHoriz}`).style.borderRadius = '3px';

          //Position speichern
          localStorage.setItem('position-horizontal', positionHoriz);
          localStorage.setItem('position-vertical', positionVertic);
        }
      }
      if (localStorage.getItem('submit')) {
        //Variablen zur Positionsbestimmung
        let positionVertic = 1;
        let positionHoriz = 1;
        let showCategories = null;
        let category = -1;

        //gab es bereits eine Position
        if(localStorage.getItem('position-vertical')) {
          positionVertic = Number(localStorage.getItem('position-vertical'));
        }
        if (localStorage.getItem('position-horizontal')) {
          positionHoriz = Number(localStorage.getItem('position-horizontal'));
        }
        if (localStorage.getItem('showCategories')) {
          showCategories = localStorage.getItem('showCategories');
        }
        if (localStorage.getItem('category')) {
          category = Number(localStorage.getItem('category'));
        }

        localStorage.clear();

        if (positionHoriz === 1 && positionVertic === 1) { //wird auf den Bestseller geklickt
          localStorage.setItem('changeControl', 'steuerung-basket')
          navigate(`/detail`, {replace: true}); //eslint-disable-line
        } else if (positionHoriz === 0 && positionVertic === 0) { //wird auf das Dropdown Mennue geklickt
            if (showCategories !== null) { //ist das Menue sichtbar
              if (category === -1) { //handelt es sich um das Dropdown
                document.getElementById('position0-0').click();
                localStorage.removeItem('showCategories');
              } else if (category === 1) { //handelt es sich um die Kategorie Romane
                localStorage.setItem('changeView', 'overview_sorting')
                navigate(`/overview_sorting`, {replace: true}); //eslint-disable-line
              } else {
                localStorage.setItem('position-horizontal', positionHoriz);
                localStorage.setItem('position-vertical', positionVertic);
                localStorage.setItem('showCategories', showCategories);
                localStorage.setItem('category', category);
              } 
            } else {
              document.getElementById('position0-0').click();
              localStorage.setItem('showCategories', 'true');
            }
            localStorage.setItem('position-horizontal', positionHoriz);
            localStorage.setItem('position-vertical', positionVertic);
        } else {
          //Position speichern
          localStorage.setItem('position-horizontal', positionHoriz);
          localStorage.setItem('position-vertical', positionVertic);
        }
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
            <img src={Bestseller1} alt="Bestseller1" id='position1-0'/>
          </CarouselItemBestseller>
          <CarouselItemBestsellerMiddle to="/detail" className="col-4">
            <img src={Bestseller2} alt="Bestseller2" id='position1-1' style={{border: "4px solid #ff772f", borderRadius: "3px"}}/>
          </CarouselItemBestsellerMiddle>
          <CarouselItemBestseller className="col-4">
            <img src={Bestseller3} alt="Bestseller3" id='position1-2'/>
          </CarouselItemBestseller>
        </CarouselBestseller>
      </BestsellerWrapper>

      <RecomWrapper>
        <Headline>Für dich empfohlen</Headline>
        <Carousel className="row">
          <CarouselItem className="col-3">
            <img src={Empfehlung1} alt="Empfehlungen1" id='position2-0'/>
          </CarouselItem>
          <CarouselItemMiddle className="col-3">
            <img src={Empfehlung2} alt="Empfehlungen2" id='position2-1'/>
          </CarouselItemMiddle>
          <CarouselItem className="col-3">
            <img src={Empfehlung3} alt="Empfehlungen3" id='position2-2'/>
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
            <img src={Beliebt1} alt="Bliebt1" id='position3-0'/>
          </CarouselItem>
          <CarouselItemMiddle className="col-3">
            <img src={Beliebt2} alt="Beliebt2" id='position3-1'/>
          </CarouselItemMiddle>
          <CarouselItem className="col-3">
            <img src={Beliebt3} alt="Beliebt3" id='position3-2'/>
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
