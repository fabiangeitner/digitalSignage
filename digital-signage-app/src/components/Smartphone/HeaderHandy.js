import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";

const HeaderWrapper = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0 10px 15px -15px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 0 10px 15px -15px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0 10px 15px -15px rgba(0, 0, 0, 0.55);
  height: 10vh;
  position: fixed;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  text-align: center;
  font-size: 30px;
  font-family: proforma, serif;
  text-transform: uppercase;
  padding-top: 25px;
  color: #23645d;
`;

const Container = styled(Link)`
  float: right;
  margin-top: -38px;
  text-decoration: none;
`;
const Suche = styled(RiSearch2Line)`
  font-size: 30px;
  color: #707070;
`;

export const HeaderHandy = () => {
  return (
    <HeaderWrapper>
      <Logo>Storybook</Logo>
      <Container to="">
        <Suche />
      </Container>
    </HeaderWrapper>
  );
};
