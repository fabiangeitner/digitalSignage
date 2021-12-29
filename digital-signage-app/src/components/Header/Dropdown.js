import React from "react";
import styled from "styled-components";

import { BsHandbag } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Wrapper = styled.div``;
const EmptyWrapper = styled.div``;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled(BsHandbag)`
  font-size: 20px;
`;

export const DropdownHeader = () => {
  return (
    <Wrapper className="container">
      <DropdownWrapper className="row">
        <EmptyWrapper className="wrapper col-2"></EmptyWrapper>
        <DropdownWrapper className="my-3 col-8">
          <DropdownButton
            id="dropdown-basic-button"
            variant="secondary"
            title="Alle Kategorien"
          >
            <Dropdown.Item href="/overview">Englische Bücher</Dropdown.Item>
            <Dropdown.Item href="/overview">Romane</Dropdown.Item>
            <Dropdown.Item href="/overview">Science Fiction</Dropdown.Item>
            <Dropdown.Item href="/overview">Horror</Dropdown.Item>
            <Dropdown.Item href="/overview">Sachbücher</Dropdown.Item>
            <Dropdown.Item href="/overview">Kinderbücher</Dropdown.Item>
          </DropdownButton>
        </DropdownWrapper>
        <IconWrapper className="col-2">
          <BsHandbag />
        </IconWrapper>
      </DropdownWrapper>
    </Wrapper>
  );
};
