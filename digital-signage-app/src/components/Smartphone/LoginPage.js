import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Headline = styled.div`
  h1 {
    font-size: 28px;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #000;
    text-align: center;
  }
`;

const Login = styled.div`
  form {
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    font-size: 19px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 13px;
    font-family: sofia-pro, sans-serif;
    font-weight: 600;
    color: #23645d;
    margin-bottom: 30px;
  }
  input {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0;
    border-radius: 4px;
    border: 1px solid #707070;
    color: #707070;
  }

  p {
    font-size: 13px;
    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    color: #707070;
    text-align: center;
    margin-bottom: 80px;
  }
  div {
    width: 100%;
    background-color: #ff772f;
    font-family: sofia-pro, sans-serif;
    text-align: center;
    color: white;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const AnmeldeLink = styled(Link)`
  text-decoration: none;
  background-color: #ff772f;
  font-family: sofia-pro, sans-serif;
  text-align: center;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Register = styled.div`
  h2 {
    font-size: 19px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
  }
  div {
    width: 80%;
    background-color: #ff772f;
    font-family: sofia-pro, sans-serif;
    text-align: center;
    color: white;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  p {
    font-size: 19px;
    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    color: #ff772f;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const GastLink = styled(Link)`
  text-decoration: none;
  color: #ff772f;
`;

const login = (e) => {
  localStorage.clear();
  localStorage.setItem("changeView", "overview");
};

export const LoginPage = () => {
  React.useEffect(() => {
    window.onload = () => {
      localStorage.clear();
      localStorage.setItem("changeView", "welcome");
    };
  });

  return (
    <div>
      <Headline>
        <h1 className="my-4">Sign in</h1>
      </Headline>
      <Login>
        <h2 className="px-5 py-2">Sind Sie bereits Kunde?</h2>
        <form>
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail-Adresse"
          ></input>
          <input
            type="password"
            className="form-control"
            placeholder="Passwort"
          ></input>
          <h3 className="px-2 py-2">Passwort vergessen?</h3>
          <div className="mx-auto">
            <AnmeldeLink to="/bestellung">Anmelden</AnmeldeLink>
          </div>
        </form>
        <p>
          Mit der Anmeldung erkläre stimme ich den AGBs <br /> und der
          Datenschutzerklärung zu.
        </p>
      </Login>
      <Register>
        <h2 className="px-5 py-2">Ein Kundenkonto lohnt sich!</h2>
        <div className="mx-auto">Jetzt Konto anlegen</div>
        <GastLink to="/steuerung-back">
          <p onClick={login}>Als Gast fortfahren</p>
        </GastLink>
      </Register>
    </div>
  );
};
