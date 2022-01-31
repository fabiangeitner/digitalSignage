import React from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
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
        <div class="header">
          <span class="header-headline">STORYTIME</span>
        </div>
        <div className="content">
          <Link to="/overview">
            <img
              className="welcomeImg my-3"
              src={welcome}
              alt="Welcome Erläuterung"
            />
          </Link>
        </div>
        <div class="footer"></div>
      </div>
    </>
  );
};
