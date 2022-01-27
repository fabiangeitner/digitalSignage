import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import stars from "../../Assets/just-stars.png";
import quantity from "../../Assets/quantity.png";
import mastercard from "../../Assets/PaymentMethod/mastercard.png";
import klarna from "../../Assets/PaymentMethod/klarna.png";
import paypal from "../../Assets/PaymentMethod/paypal.png";

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
  img:first-child {
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

const WrapperTotal = styled.div`
  padding: 0 25px;
  @media (min-width: 800px) {
    padding: 20px 405px;
  }
`;

const Total = styled.div`
  h2 {
    font-size: 20px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #ff772f;
    text-align: center;
  }
  h2:nth-child(2) {
    color: #ff772f;
    text-align: right;
  }
  hr {
    background: #23645d;
    margin-bottom: 10px;
    height: 2px;
  }
`;

const Payment = styled.div`
  padding: 0 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25%;
  }
  @media (min-width: 800px) {
    img {
      width: 6%;
    }
  }
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  padding: 0;
`;

export const Cart = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      if (localStorage.getItem('changeView')) {
        navigate(`/${localStorage.getItem('changeView')}`, {replace: true}); //eslint-disable-line
      }
    })
  })

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
              <img src={items.cover} alt="Buch Cover" />
            </div>
            <div className="item-content col-6">
              <h4>{items.headline}</h4>
              <h5>von {items.author}</h5>
              <img id="stars" src={stars} alt="Sterne Bewertung" />
              <img src={quantity} alt="Quantity" />
            </div>
            <div className="item-content-right col-3">
              <h4>{items.price}</h4>
            </div>
          </Item>
        ))}
      </CartItems>
      <WrapperTotal className="container">
        <Total className="row">
          <h2 className="col-3">Total</h2>
          <LinkTo className="col-4 offset-5" to="/infoCheckout">
            <h2>15€</h2>
          </LinkTo>
          <hr />
        </Total>
      </WrapperTotal>
      <Payment>
        <img src={mastercard} alt="Payment types" />
        <img src={klarna} alt="Payment types" />
        <img src={paypal} alt="Payment types" />
      </Payment>
    </>
  );
};
