import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import stars from "../../Assets/just-stars.png";
import quantity from "../../Assets/quantity.png";
import bestseller from "../../Assets/bestseller-tag.png";


import { Header } from "../Header/Header";
import { Items } from "./CartItems";

const Headline = styled.div`
  h2 {
    font-size: 20px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
`;

const CartItems = styled.div`
  padding: 0 20px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    padding: 20px 400px;
    margin-bottom: 0;
  }
`;

const Item = styled.div`
  background: #ededed;
  padding: 10px;
  margin: 0 5px 20px 5px;
  border-radius: 5px;
  img:first-child{
    width: 100%;
    @media (min-width: 800px) {
      width: 80%;
    }
  }
  .item-content {
    #stars {
        margin-bottom: 10px;
    }
    img {
        width: 40%;
        display: block;
    
        @media (min-width: 800px) {
          width: 20%;
        }
      }
  }
  .item-content-right {
    position: relative;
    img {
        width: 100%;
        position: absolute;
    
        @media (min-width: 800px) {
          width: 100%;
        }
      }
      h4 {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 0;
      }
  }
  h4 {
    font-size: 15px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
  }
  h5 {
    font-size: 12px;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #707070;
  }
`;

const Total = styled.div`
  padding: 0 20px;
  @media (min-width: 800px) {
    padding: 20px 400px;
  }
  hr {
    background: #23645d;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 20px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
  h2:nth-child(2) {
    color: #FF772F;
  }
`

const Payment = styled.div`
  padding: 0 20px;
  @media (min-width: 800px) {
    padding: 50px 400px;
  }
  img {
      width: 40%;
  }
`

export const Cart = () => {
  return (
    <>
      <Header />
      <Headline className="px-3 py-2">
        <h2 className="my-3">Warenkorb</h2>
      </Headline>
      <CartItems className="container">
        {Items.map((items) => (
          <Item className="row">
            <div className="col-3">
                <img src={items.cover} alt="Buch Cover"/>
            </div>
            <div className="item-content col-6">
                <h4>{items.headline}</h4>
                <h5>von {items.author}</h5>
                <img id="stars" src={stars} alt="Sterne Bewertung" />
                <img src={quantity} alt="Quantity" />
            </div>
            <div className="item-content-right col-3">
                <img src={bestseller} alt="Bestseller Tag" />
                <h4>{items.price}</h4>
            </div>
          </Item>
        ))}
      </CartItems>
      <Total className="row">
        <h2 className="col-3">Total</h2>
        <h2 className="col-3 offset-6">44,94</h2>
        <hr />
      </Total>
      <Payment>
          <img src={bestseller} alt="Payment types"/>
      </Payment>

    </>
  );
};