import React from "react";

import { Link } from "react-router-dom";
import "./DetailPage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../Assets/Book-IfIStay.png";
import stars from "../../Assets/stars.png";
import heart from "../../Assets/heart.png";

export const DetailPage = () => {
  return (
    <>
      <div className="containerTest">
        <div class="header">
          <span class="header-headline">Header platzhalter</span>
        </div>
        <div className="content">
          <div className="imageStars">
            <img 
                className="stars mt-2"
                src={stars}
                alt="Sterne Bewertung"
            />
          </div>
          <img
            className="book my-2"
            src={book}
            alt="Buch groß"
          />
          <div className="wrapperText mx-auto">
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
          </div>
        </div>
        <div class="footer-filliale">
            <p>In dieser Filliale verfügbar</p>
        </div>
      </div>
    </>
  );
};
