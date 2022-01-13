import React from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import Smartphone from "../../Assets/Smartphone.png";
import { Link } from "react-router-dom";

const InfoCheckoutWrapper = styled.div`
  height: 92vh;
  padding: 20px;
  text-align: center;
  h3 {
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    margin: 0;
  }
  img {
    width: 65%;
    @media (min-width: 800px) {
      width: 22%;
    }
  }
`;

const LinkTo = styled(Link)``;

export const InfoCheckout = (props) => {
  return (
    <div>
      <Header />
      <InfoCheckoutWrapper className="container">
        <h3 className="py-5">{props.text}</h3>
        <LinkTo to="/infoFavorit">
          <img src={Smartphone} alt="Smartphone-Screen" />
        </LinkTo>
      </InfoCheckoutWrapper>
    </div>
  );
};
