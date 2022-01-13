import React from "react";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 20px;
  height: 40vh;
  text-align: center;

  @media (min-width: 800px) {
    height: 40vh;
  }

  h3 {
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    margin: 0;
  }
  }
`;

const Container = styled.div`
  text-align: center;
  position: relative;
  bottom: 0;
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

const BtnLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;

  @media (min-width: 800px) {
    margin-left: 10px;
    margin-right: 0px;
  }
`;

const ButtonLight = styled(Link)`
  color: #000;
  text-decoration: none;
  background: #23645d;
  color: #fff;
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #fff;
    opacity: 0.8;
  }

  @media (min-width: 800px) {
    width: 30vw;
  }
`;

const Btndark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    margin-left: 10px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`;

const ButtonDark = styled(Link)`
  color: #000;
  text-decoration: none;
  background: grey;
  color: #fff;
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #fff;
    opacity: 0.8;
  }

  @media (min-width: 800px) {
    width: 30vw;
  }
`;

export const Start = () => {
  return (
    <div>
      <Header />
      <Wrapper className="container">
        <h3 className="pt-5">Schritt 1:</h3>
        <h3 className="pt-2">
          Um loszulegen, wählen Sie bitte Ihr Endgerät aus!
        </h3>
      </Wrapper>
      <Container>
        <Btndark>
          <ButtonDark to="/slideshow">Digital Signage</ButtonDark>
        </Btndark>
        <BtnLight>
          <ButtonLight to="/">Smartphone</ButtonLight>
        </BtnLight>
      </Container>
    </div>
  );
};
