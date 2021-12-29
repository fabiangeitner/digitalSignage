import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #23645d;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderHeadline = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
`;

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderHeadline>Storybook</HeaderHeadline>
      </HeaderWrapper>
    </>
  );
};
