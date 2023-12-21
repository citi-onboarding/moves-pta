import React from "react";
import { HomeContainer } from "./style";
import { ResponsiveAppBar, FooterSection } from "../components";
export default function Home() {
  return (
    <HomeContainer>
      <ResponsiveAppBar />
      <FooterSection linkedin="https://www.linkedin.com/company/movesbrasil/" facebook="https://www.facebook.com/movesbrasill" instagram="https://instagram.com/movesbrasil?igshid=MzMyNGUyNmU2YQ=="/>
    </HomeContainer>
  );
}
