import React from "react";
import { HomeContainer } from "./style";
import { LogoCITi } from "../assets";
import { ResponsiveAppBar } from "components";

export default function Home() {
  return (
    <HomeContainer> 
      <ResponsiveAppBar/>
      <img src={LogoCITi.src} alt="" />
      <h1>Next.js Boilerplate</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by CITi
      </p>
    </HomeContainer>
  );
}
