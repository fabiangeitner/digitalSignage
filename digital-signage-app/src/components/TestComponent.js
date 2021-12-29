import React from "react";
import { Link } from "react-router-dom";
import { DropdownHeader } from "./Header/Dropdown";
import { Header } from "./Header/Header";

export const TestComponent = () => {
  return (
    <div>
      <Header />
      <DropdownHeader />
      <h1>Test Component</h1>
      <ul>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dolor</li>
      </ul>
      <Link to="/">back Homepage</Link>
    </div>
  );
};
