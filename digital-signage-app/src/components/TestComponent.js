import React from "react";
import { Link } from "react-router-dom";

export const TestComponent = () => {
  return (
    <div>
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
