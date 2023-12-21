import React from "react";
import { HomeContainer } from "./style";
import { LogoCITi } from "../assets";
import { FooterSection } from "../components";
export default function Home() {
  return (
    <HomeContainer>
      <img src={LogoCITi.src} alt="" />
      <h1>Next.js Boilerplate</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by CITi
      </p>
      <FooterSection linkedin="https://www.linkedin.com/company/movesbrasil/" facebook="https://www.facebook.com/movesbrasill" instagram="https://instagram.com/movesbrasil?igshid=MzMyNGUyNmU2YQ=="/>
    </HomeContainer>
  );
}
