import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavigationSmartphone } from "./NavigationSmartphone";

const BestellübersichtWrapper = styled.div`
  width: 100%;
  height: 90vh;
`;

const Header = styled.div`
  background: #fff;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Sofia Pro";
  font-size: 25px;
`;

const Wrapper = styled.div`
  padding: 0 25px;
`;

const Information = styled.div`
  background: #ededed;
  border-radius: 25px;
  padding: 25px;
  height: 15vh;

  h1 {
    color: #000000;
    font-size: 18px;
    font-family: "Sofia Pro";
    font-weight: 700;
    margin-bottom: 15px;
  }
  p {
    color: #000000;
    font-size: 16px;
    font-family: "Sofia Pro";
    font-weight: 400;
    margin: 0;
  }
  span {
    color: #000000;
    font-size: 16px;
    font-family: "Sofia Pro";
    font-weight: 400;
  }
`;
const Zahlung = styled.div`
  background: #ededed;
  border-radius: 25px;
  padding: 25px;
  margin-top: 15px;
  height: 15vh;

  h1 {
    color: #000000;
    font-size: 18px;
    font-family: "Sofia Pro";
    font-weight: 700;
    margin-bottom: 15px;
  }
  p {
    color: #000000;
    font-size: 16px;
    font-family: "Sofia Pro";
    font-weight: 400;
    margin: 0;
  }
  span {
    color: #000000;
    font-size: 16px;
    font-family: "Sofia Pro";
    font-weight: 400;
  }
`;

const Detail = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
`;
const Headline = styled.div`
  width: 60%;
  float: left;
  font-family: "Sofia Pro";
  font-size: 16px;
  font-weight: 700;
`;
const Subheadline = styled.div`
  width: 40%;
  float: right;
  text-align: right;
  font-family: "Sofia Pro";
  font-size: 12px;
  margin-top: 7px;
`;
const Übersicht = styled.div`
  height: 10vh;
`;
const Artikel = styled.div`
  width: 70%;
  float: left;
  font-size: 14px;
`;
const Preis = styled.div`
  width: 30%;
  float: right;
  text-align: right;
  font-size: 14px;
`;
const Gesamtbetrag = styled.div`
  border: 1px solid #000;
`;
const Summe = styled.div`
  width: 70%;
  float: left;
  margin-top: 10px;
`;
const Betrag = styled.div`
  width: 30%;
  float: right;
  text-align: right;
  margin-top: 10px;
`;
const ButtonContainer = styled.div`
  background: #ff772f;
  margin-top: 100px;
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  text-align: center;
`;
const Button = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const BestellübersichtMobile = () => {
  return (
    <>
      <BestellübersichtWrapper>
        <Header>Warenkorb</Header>
        <Wrapper>
          <Information>
            <h1>Meine Informationen</h1>
            <p>Paul Zimmermann</p>
            <span>paul-zimmermann@web.de</span>
          </Information>
          <Zahlung>
            <h1>Zahlung</h1>
            <p>
              Bevorzugte Zahlungsart: <b>Barzahler</b>
            </p>
          </Zahlung>
          <Detail>
            <Headline>Angaben zur Bestellung</Headline>
            <Subheadline>3 Artikel</Subheadline>
          </Detail>
          <Übersicht>
            <Artikel>
              <b>1x</b> If I stay
            </Artikel>
            <Preis>15,00 €</Preis>
            <Artikel>
              <b>1x</b> Mord im alten Pfarrhaus
            </Artikel>
            <Preis>14,95 €</Preis>
            <Artikel>
              <b>1x</b> It ends with us
            </Artikel>
            <Preis>18,99 €</Preis>
          </Übersicht>
          <Gesamtbetrag>
            <Summe>Gesamtsumme</Summe>
            <Betrag>44,95 €</Betrag>
          </Gesamtbetrag>
          <ButtonContainer>
            <Button to="">Jetzt Bezahlen</Button>
          </ButtonContainer>
        </Wrapper>
      </BestellübersichtWrapper>
      <NavigationSmartphone />
    </>
  );
};
