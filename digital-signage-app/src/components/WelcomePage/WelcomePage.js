import React from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import "./WelcomePage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import welcome from "../../Assets/WelcomePage.png";

export const WelcomePage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      if (localStorage.getItem("changeView")) {
        navigate(`/${localStorage.getItem("changeView")}`, { replace: true }); //eslint-disable-line
      }
    });
  });

  return (
    <>
      <div className="containerTest">
        <div className="header">
          <span className="header-headline">STORYTIME</span>
        </div>
        <div className="content">
          <p>So funktioniert's:</p>
          <Link to="/overview">
            <img
              className="welcomeImg"
              src={welcome}
              alt="Welcome Erläuterung"
            />
          </Link>

          <h3>Nutzen Sie ihr Smartphone zur Steuerung!</h3>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};
