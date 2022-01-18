import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavigationSmartphone } from "./NavigationSmartphone";

const SearchMobileWrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 90vh;
  display: block;
  text-align: center;
  padding: 25px;
`;

const ContainerInput = styled.div`
  height: 40vh;

  input {
    border-radius: 15px;
    border: none;
    background: #ededed;
    width: 100%;
    height: 8vh;
    margin-top: 10vh;
    margin-bottom: 20vh;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: green;
`;

const Button = styled(Link)`
  text-decoration: none;
  color: #707070;
  border: 1px solid #ededed;
  border-radius: 15px;
  background: #ededed;
  padding: 10px;
  bottom: 0;
`;

export const SearchMobile = () => {
  return (
    <>
      <SearchMobileWrapper>
        <ContainerInput>
          <input type="text" id="input" />
        </ContainerInput>
        {/* <ButtonContainer>
          <Button to="">Suchen</Button>
        </ButtonContainer> */}
      </SearchMobileWrapper>
      <NavigationSmartphone />
    </>
  );
};
