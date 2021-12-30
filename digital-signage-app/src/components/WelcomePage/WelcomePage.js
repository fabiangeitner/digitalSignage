import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import "./WelcomePage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import welcome from "../../Assets/WelcomePage.png";

const Headline = styled.h2`
  font-family: "Proforma";
  font-weight: bold;
  color: #23645d;
  font-size: 25px;
  padding-top: 20px;
`;

export const WelcomePage = () => {
  return (
    <>
      <div className="containerTest">
        <div class="header">
          <span class="header-headline">STORYTIME</span>
        </div>
        <div className="content">
          <Headline>WILLKOMMEN</Headline>
          <p>So funktioniert's:</p>
          <Link to="/overview">
            <img
              className="welcomeImg my-5"
              src={welcome}
              alt="Welcome Erläuterung"
            />
          </Link>

          <h3 class="py-3">Nutzen Sie ihr Smartphone zur Steuerung!</h3>
        </div>
        <div class="footer"></div>
      </div>
    </>
  );
};
