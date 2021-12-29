import React from "react";

import { Link } from "react-router-dom";
import "./WelcomePage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import welcome from "../../Assets/WelcomePage.png";

export const WelcomePage = () => {
  return (
    <>
      <div className="containerTest">
        <div class="header">
          <span class="header-headline">STORYTIME</span>
        </div>
        <div className="content">
          <h2 class="pt-4 pb-1">WILLKOMMEN</h2>
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
