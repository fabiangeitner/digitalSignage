import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { HeaderHandy } from "./HeaderHandy";
import { NavigationSmartphone } from "./NavigationSmartphone";

const SteuerungWrapper = styled.div`
  height: 90vh;
  padding-top: 10vh;
  text-align: center;
`;

const Container = styled.div`
  background: #ededed;
  text-align: center;
  padding: 10vh 2vh;
  margin: 25px;
  border-radius: 15px;
`;

const Element = styled.div`
  border: 5px solid #fff;
  text-align: center;
  border-radius: 300px;
`;

const Top = styled(Link)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
`;

const IconT = styled(MdKeyboardArrowUp)`
  font-size: 35px;
`;

const Left = styled(Link)`
  width: 30%;
  float: left;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
`;

const IconL = styled(MdKeyboardArrowLeft)`
  font-size: 35px;
`;

const Middle = styled(Link)`
  width: 40%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  font-size: 30px;

  text-decoration: none;
  color: #707070;
`;

const Right = styled(Link)`
  width: 30%;
  float: right;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #707070;
`;

const IconR = styled(MdKeyboardArrowRight)`
  font-size: 35px;
`;

const Bottom = styled(Link)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #707070;
`;

const IconB = styled(MdKeyboardArrowDown)`
  font-size: 35px;
`;

const Button = styled.div`
  background: #ededed;
  margin: 0 25px;
  margin-top: 25px;
  padding: 10px;
  border-radius: 15px;
`;

const Back = styled(Link)`
  text-decoration: none;
  color: #707070;
`;

const changeDirection = (direction) => {
  //Variablen zur Positionsbestimmung
  let positionVertical = null;
  let positionHorizontal = null;
  let showCategories = null;
  let category = null;

  //gibt es schon eine Position
  if(localStorage.getItem('position-vertical')) {
    positionVertical = Number(localStorage.getItem('position-vertical'));
  }
  if (localStorage.getItem('position-horizontal')) {
    positionHorizontal = Number(localStorage.getItem('position-horizontal'));
  }
  if (localStorage.getItem('showCategories')) {
    showCategories = localStorage.getItem('showCategories');
  }
  if (localStorage.getItem('category')) {
    category = Number(localStorage.getItem('category'));
  }

  localStorage.clear();

  //Position speichern + Richtung
  positionVertical !== null ? localStorage.setItem("position-vertical", positionVertical) : positionVertical = null;
  positionHorizontal !== null ? localStorage.setItem("position-horizontal", positionHorizontal) : positionHorizontal = null;
  showCategories !== null ? localStorage.setItem("showCategories", showCategories) : showCategories = null;
  category !== null ? localStorage.setItem("category", category) : category = null;
  localStorage.setItem("direction", direction);
};

const submit = () => {
  //Variablen zur Positionsbestimmung
  let positionVertical = null;
  let positionHorizontal = null;
  let showCategories = null;
  let category = null;

  //gibt es schon eine Position
  if(localStorage.getItem('position-vertical')) {
    positionVertical = Number(localStorage.getItem('position-vertical'));
  }
  if (localStorage.getItem('position-horizontal')) {
    positionHorizontal = Number(localStorage.getItem('position-horizontal'));
  }
  if (localStorage.getItem('showCategories')) {
    showCategories = localStorage.getItem('showCategories');
  }
  if (localStorage.getItem('category')) {
    category = Number(localStorage.getItem('category'));
  }

  localStorage.clear();

  //Position speichern + Richtung
  positionVertical !== null ? localStorage.setItem("position-vertical", positionVertical) : positionVertical = null;
  positionHorizontal !== null ? localStorage.setItem("position-horizontal", positionHorizontal) : positionHorizontal = null;
  showCategories !== null ? localStorage.setItem("showCategories", showCategories) : showCategories = null;
  category !== null ? localStorage.setItem("category", category) : category = null;
  localStorage.setItem("submit", "true");
}

export const SteuerelementZurück = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      if (localStorage.getItem('changeView')) {
        if (localStorage.getItem('changeView') === 'detail') {
          navigate(`/steuerung-basket`, {replace: true}); //eslint-disable-line
        }
      } 
    })
  })

  return (
    <div>
      <HeaderHandy />
      <SteuerungWrapper>
        <Container>
          <Element>
            <Top to="">
              <IconT onClick={() => {changeDirection('top')}}/>
            </Top>
            <Left to="">
              <IconL onClick={() => {changeDirection('left')}}/>
            </Left>
            <Middle to="" onClick={submit}>OK</Middle>
            <Right to="">
              <IconR onClick={() => {changeDirection('right')}}/>
            </Right>
            <Bottom to="">
              <IconB onClick={() => {changeDirection('bottom')}}/>
            </Bottom>
          </Element>
        </Container>
        <Button>
          <Back to="">Zurück</Back>
        </Button>
      </SteuerungWrapper>
      <NavigationSmartphone />
    </div>
  );
};
