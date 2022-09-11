import React from "react";
import LoginContainer from "../../../components/login";
import { CONTENT } from "./content";

const LandingPage = () => {
  const { heading } = CONTENT;
  return (
    <div>
      <h1>{heading}</h1>
      <LoginContainer />
    </div>
  );
};

export default LandingPage;
