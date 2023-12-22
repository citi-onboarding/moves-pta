import styled from "styled-components";
import Image from "next/image"; // Import the next/image component

export const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url('/img/hero-bg.svg');
  background-size: cover;
  background-position: start;
  min-width: 100%;
  min-height: 100vh;
  padding: 30px;
  margin-top: 860px;
  /* Add margin/padding to create space above this section */
  /* For example, you can add padding-top to the body or a wrapper div */
`;




export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const SobreImage = styled(Image)`
  width: 554px;
  height: 489px;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%; /* Make the text container take up the whole width on smaller screens */
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #004a8c;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #004a8c;
`;
