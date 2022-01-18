import React from "react";
import styled from "styled-components";
import { Link, useNavigate} from "react-router-dom";

import { BiUser } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";

import stars from "../../Assets/stars.png";

import { Header } from "../Header/Header";
import { Customer } from "./CustomerReviewData";

const Headline = styled.div`
  h2 {
    font-size: 20px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
`;

const Back = styled(BsArrowLeftShort)`
  padding-top: 10px;
  font-size: 45px;
`;

const LinkTo = styled(Link)`
  color: #000;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
    color: #000;
  }
`;

const Kundenbewertungen = styled.div`
  padding: 0 50px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    padding: 50px 400px;
  }
`;

const Bewertung = styled.div`
  background: #ededed;
  padding: 20px 20px 0 20px;
  img {
    width: 40%;
    padding: 10px 0 5px 0;

    @media (min-width: 800px) {
      width: 15%;
    }
  }
  h3 {
    font-size: 15px;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
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
  p {
    font-size: 15px;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
  }
  hr {
    background: #23645d;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

const User = styled(BiUser)`
  font-size: 25px;
  border: 1.5px solid black;
  border-radius: 100px;
  margin-right: 15px;
  background: #fff;
`;

const UserProfile = styled.div`
  display: flex;
`;
const Username = styled.div`
  font-size: 15px;
`;

export const CustomerReview = () => {

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
      <Headline className="row px-3 py-2">
        <div className="pt-1 col-2">
          <LinkTo to="/detail">
            <Back />
          </LinkTo>
        </div>
        <h2 className="my-3 col-8">Kundenbewertung</h2>
        <div className="empty col-2"></div>
      </Headline>
      <Kundenbewertungen>
        {Customer.map((customer) => (
          <Bewertung>
            <UserProfile>
              <User />
              <Username>
                <h3>{customer.name}</h3>
              </Username>
            </UserProfile>
            <img src={stars} alt="Sterne Bewertung" />
            <h4>{customer.headline}</h4>
            <h5>Rezension aus Deutschland vom {customer.date}</h5>
            <p>{customer.description}</p>
            <hr />
          </Bewertung>
        ))}
      </Kundenbewertungen>
    </>
  );
};
