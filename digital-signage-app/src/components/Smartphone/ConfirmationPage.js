import React from 'react';
import styled from "styled-components";
import { NavigationSmartphone } from "./NavigationSmartphone";
import QRCode from "../../Assets/QRCode.png";
import { BsCheckCircle } from "react-icons/bs";


const ConfirmationPageWrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 87vh;

  h2 {
    font-size: 24px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
    margin-top: 50px
  }
  p {
    font-size: 13px;
    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    color: #707070;
    margin-bottom: 70px;
  }
  .test {
    font-size: 13px;
    font-family: sofia-pro, sans-serif;
    font-weight: 700;
    color: black; 
    margin-bottom: 70px; 
  }

  .qr {
    font-size: 13px;
    font-family: sofia-pro, sans-serif;
    font-weight: 300;
    color: #707070;
    margin-bottom: 10px;
  }
`;
const Headline = styled.div`
  h1 {
    font-size: 28px;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    color: #000;
    text-align: center;
  }
`;

const CheckIcon = styled(BsCheckCircle)`
font-size: 20px;
color: #ff772f;
margin-left: 45px
`;
const QrCode = styled.div`
img {
height: 25%;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
}
`;

export const ConfirmationPage = () => {
    return (
        <>
        <ConfirmationPageWrapper >
            <Headline>
                <h1 className="my-4">Warenkorb</h1>
            </Headline>
            <h2 className="px-5 py-2">Vielen Dank für Ihre Bestellung!</h2>
            <p className="px-5 py-2">Die Bestätigung wird an Ihre E-Mail gesendet.</p>
                <div className="container">
                    <div className="row"> 
                        <CheckIcon className="col"/>
                        <p className="col-9 test">Bestellung im Laden abholbar!</p> 
                    </div>
                </div>      
            <p className="qr px-5 py-2">Zeigen Sie diesen QR-Code bei der Abholung im Laden vor.</p>
            <QrCode>
                <img src={QRCode} alt="QR Code" />
            </QrCode>
        </ConfirmationPageWrapper>
        <NavigationSmartphone />
        </>
    );
}
