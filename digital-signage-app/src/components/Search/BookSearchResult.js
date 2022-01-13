import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Header } from "../Header/Header";

import book from "../../Assets/Books/item1.png";

const Search = styled.div`
  padding: 10px 20px;
  margin: 20px;
  background-color: #EDEDED;
  border-radius: 20px;
  h2 {
    font-size: 12px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #707070;
    margin-bottom: 0;
    @media (min-width: 800px) {
      font-size: 17px;
      margin-bottom: 0;
    }
  }
  @media (min-width: 800px) {
    padding: 10px 20px;
    margin: 20px 400px;
  }
`

const SearchResult = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    padding: 20px 400px;
    margin-bottom: 10px;
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
  margin-bottom: 5px;
  border-radius: 5px;
  img {
      width: 40%
  }
`

export const BookSearchResult = () => {
    return (
      <>
        <Header></Header>
        <Search>
            <h2>X   If I stay</h2>
        </Search>
        <SearchResult>
            <Headline>1 Ergebnis</Headline>
            <Option>
                <img src={book} alt="book If I stay"/>
            </Option>
        </SearchResult>
      </>
    );
};