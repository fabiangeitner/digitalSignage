import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header } from "../Header/Header";

const Search = styled.div`
  padding: 20px;
  @media (min-width: 800px) {
    padding: 20px 400px;
    margin-bottom: 0;
  }
  input {
      width: 100%;
      border-radius: 20px;
      border: 2px solid #EDEDED;
      background-color: #EDEDED;
      color: #707070;
      padding: 5px 20px;
      font-size: 15px;
      font-family: sofia-pro, sans-serif;
      font-weight: 400;
      @media (min-width: 800px) {
        font-size: 17px;
        margin-bottom: 0;
      }
  }
`

const FrequentlySearched = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    padding: 20px 400px;
  }
`

const Headline = styled.h2`
  font-size: 12px;
  font-family: sofia-pro, sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
  @media (min-width: 800px) {
    font-size: 17px;
    margin-bottom: 25px;
  }
`;

const Option = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  background-color: #EDEDED;
  border-radius: 5px;
`

const OptionHeadline = styled.h2`
  font-size: 15px;
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
  margin-bottom: 0;
  @media (min-width: 800px) {
    font-size: 17px;
  }
`;

export const BookSearch = () => {
    return (
      <>
        <Header></Header>
        <Search>
            <input type={"text"} placeholder="|"/>
        </Search>
        <FrequentlySearched>
            <Headline>Häufig gesucht</Headline>
            <Option>
                <OptionHeadline>If I stay</OptionHeadline>
            </Option>
            <Option>
                <OptionHeadline>Becoming</OptionHeadline>
            </Option>
            <Option>
                <OptionHeadline>Stephen King</OptionHeadline>
            </Option>
        </FrequentlySearched>
      </>
    );
};