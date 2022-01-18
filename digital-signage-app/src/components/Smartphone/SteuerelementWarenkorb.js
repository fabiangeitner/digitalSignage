import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { HeaderHandy } from "./HeaderHandy";
import { NavigationSmartphone } from "./NavigationSmartphone";

const SteuerungWrapper = styled.div`
  height: 90vh;
  padding-top: 10vh;
  text-align: center;
`;

const Container = styled.div`
  background: #ededed;
  text-align: center;
  padding: 10vh 2vh;
  margin: 25px;
  border-radius: 15px;
`;

const Element = styled.div`
  border: 5px solid #fff;
  text-align: center;
  border-radius: 300px;
`;

const Top = styled(Link)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
`;

const IconT = styled(MdKeyboardArrowUp)`
  font-size: 35px;
`;

const Left = styled(Link)`
  width: 30%;
  float: left;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
`;

const IconL = styled(MdKeyboardArrowLeft)`
  font-size: 35px;
`;

const Middle = styled(Link)`
  width: 40%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  font-size: 30px;

  text-decoration: none;
  color: #707070;
`;

const Right = styled(Link)`
  width: 30%;
  float: right;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #707070;
`;

const IconR = styled(MdKeyboardArrowRight)`
  font-size: 35px;
`;

const Bottom = styled(Link)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
`;

const IconB = styled(MdKeyboardArrowDown)`
  font-size: 35px;
`;

const ButtonFir = styled.div`
  background: #ededed;
  margin: 0 25px;
  margin-top: 25px;
  padding: 10px;
  border-radius: 15px;
`;

const Back = styled(Link)`
  text-decoration: none;
  color: #707070;
`;

const ButtonSec = styled.div`
  background: #ff772f;
  margin: 0 25px;
  margin-top: 25px;
  padding: 10px;
  border-radius: 15px;
`;

const Pay = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const SteuerelementWarenkorb = () => {
  return (
    <div>
      <HeaderHandy />
      <SteuerungWrapper>
        <Container>
          <Element>
            <Top to="">
              <IconT />
            </Top>
            <Left to="">
              <IconL />
            </Left>
            <Middle to="">OK</Middle>
            <Right to="">
              <IconR />
            </Right>
            <Bottom to="">
              <IconB />
            </Bottom>
          </Element>
        </Container>
        <ButtonFir>
          <Back to="">Zurück</Back>
        </ButtonFir>
        <ButtonSec>
          <Pay to="steuerung-pay">In den Warenkorb</Pay>
        </ButtonSec>
      </SteuerungWrapper>
      <NavigationSmartphone />
    </div>
  );
};
