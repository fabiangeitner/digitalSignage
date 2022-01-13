import React from 'react'
import styled from "styled-components";

const Headline = styled.div`
  h2 {
    font-size: 20px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
`;

const Login = styled.div`
  h3 {
    font-size: 20px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
  }

  input {
    
  }
  p {
    font-size: 13px;
    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    color: #707070;
    text-align: center;
  }
`;

export const LoginPage = () => {
    return (
        <div>
            <Headline className="px-3 py-2">
                <h2 className="my-3">Sign in</h2>
            </Headline>
            <Login>
                <h3>Sind Sie bereits Kunde?</h3>
                <input type="text"></input>
                <input type="text"></input>
                <button>Anmelden</button>
                <p>Mit der Anmeldung erkläre stimme ich den AGBs <br/> und der Datenschutzerklärung zu.</p>
            </Login>
        </div>
    )
}
