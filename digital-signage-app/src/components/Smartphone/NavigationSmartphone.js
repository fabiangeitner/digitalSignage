import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  -webkit-box-shadow: inset 0 15px 15px -15px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: inset 0 15px 15px -15px rgba(0, 0, 0, 0.55);
  box-shadow: inset 0 15px 15px -15px rgba(0, 0, 0, 0.55);
  height: 10vh;
  position: fixed;

  ul {
    margin: 0;
    padding: 0;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  :hover {
    color: #ff772f;
  }
`;
const HerzLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  :hover {
    color: #ff772f;
  }
`;
const BasketLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  :hover {
    color: #ff772f;
  }
`;
const UserLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  :hover {
    color: #ff772f;
  }
`;

const Home = styled(AiOutlineHome)`
  font-size: 30px;
  width: 25vw;
`;
const Herz = styled(AiOutlineHeart)`
  font-size: 30px;
  width: 25vw;
`;
const Basket = styled(BsHandbag)`
  font-size: 30px;
  width: 25vw;
`;
const User = styled(AiOutlineUser)`
  font-size: 30px;
  width: 25vw;
`;

const home = (e) => {
  localStorage.clear();
  localStorage.setItem("changeView", "overview");
};

const herz = (e) => {
  localStorage.clear();
  localStorage.setItem("changeView", "infoFavorit");
};

const basket = (e) => {
  localStorage.clear();
  localStorage.setItem("changeView", "cart");
};

const user = (e) => {
  localStorage.clear();
  localStorage.setItem("changeView", "infoProfile");
};

export const NavigationSmartphone = () => {
  return (
    <>
      <NavigationWrapper>
        <ul>
          <HomeLink to="/steuerung-back">
            <Home onClick={home} />
          </HomeLink>
          <HerzLink to="/login">
            <Herz onClick={herz} />
          </HerzLink>
          <BasketLink to="/steuerung-pay">
            <Basket onClick={basket} />
          </BasketLink>
          <UserLink to="/login">
            <User onClick={user} />
          </UserLink>
        </ul>
      </NavigationWrapper>
    </>
  );
};
