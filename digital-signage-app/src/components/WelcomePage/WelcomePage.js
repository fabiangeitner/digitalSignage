import React from "react";
import { Link } from "react-router-dom";
import WelcomePageCss from "./WelcomePage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import welcome from "../../Assets/WelcomePage.png";

export const WelcomePage = () => {
  return (
    <>
      <div className="containerTest">
        <div class="header">
          <h1 class="py-4">STORYTIME</h1>
        </div>
        <h2 class="pt-3 pb-1">WILLKOMMEN</h2>
        <div class="content">
          <p>So funktioniert's:</p>
          <img className="welcome"
                src={welcome}
                alt="Welcome Erläuterung"
              />
          <h3 class="py-2">Nutzen Sie ihr Smartphone zur Steuerung!</h3>
        </div>
        <div class="py-5 footer"></div>
      </div>
    </>
  );
};
