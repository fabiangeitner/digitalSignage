import React from "react";

import { Link } from "react-router-dom";
import "./DetailPage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../Assets/Book-IfIStay.png";
import stars from "../../Assets/stars.png";

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
                className="stars mt-3"
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
            <h2 class="">If I stay</h2>
            <p></p>
          </div>
        </div>
        <div class="footer-filliale">
            <p>In dieser Filliale verfügbar</p>
        </div>
      </div>
    </>
  );
};
