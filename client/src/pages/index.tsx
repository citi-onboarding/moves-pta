import React from "react";
import { HomeContainer } from "./style";
import { ResponsiveAppBar, HeroSection, FooterSection, AboutSection } from "../components";
export default function Home() {
  return (
    <HomeContainer>
      <ResponsiveAppBar />
      <HeroSection />
      <AboutSection />
      <FooterSection linkedin="https://www.linkedin.com/company/movesbrasil/" facebook="https://www.facebook.com/movesbrasill" instagram="https://instagram.com/movesbrasil?igshid=MzMyNGUyNmU2YQ=="/>
    </HomeContainer>
  );
}
