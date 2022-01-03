import React from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import Smartphone from "../../Assets/Smartphone.png";

const InfoFavoritWrapper = styled.div`
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

export const InfoFavorit = (props) => {
  return (
    <div>
      <Header />
      <InfoFavoritWrapper className="container">
        <h3 className="py-5">{props.text}</h3>
        <img src={Smartphone} alt="Smartphone-Screen" />
      </InfoFavoritWrapper>
    </div>
  );
};
