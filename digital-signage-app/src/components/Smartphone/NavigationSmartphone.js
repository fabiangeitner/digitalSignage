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

const Home = styled(AiOutlineHome)`
  font-size: 30px;
  width: 25vw;

  :hover {
    color: #ff772f;
  }
`;
const Herz = styled(AiOutlineHeart)`
  font-size: 30px;
  width: 25vw;

  :hover {
    color: #ff772f;
  }
`;
const Basket = styled(BsHandbag)`
  font-size: 30px;
  width: 25vw;

  :hover {
    color: #ff772f;
  }
`;
const User = styled(AiOutlineUser)`
  font-size: 30px;
  width: 25vw;

  :hover {
    color: #ff772f;
  }
`;

export const NavigationSmartphone = () => {
  return (
    <>
      <NavigationWrapper>
        <ul>
          <Home to="/" />
          <Herz to="/" />
          <Basket to="/" />
          <User to="/" />
        </ul>
      </NavigationWrapper>
    </>
  );
};
