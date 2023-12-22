import styled from "styled-components";
import Image from "next/image"; // Import the next/image component

export const ContactSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url('/img/contato-bg.svg');
  background-size: cover;
  background-position: center;
  width: 100%; /* Ensure minimum width is 100% of the viewport */
  min-height: 140vh; /* Set minimum height to 100% of the viewport height */
  margin-top: -20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SobreImage = styled(Image)`
  width: 616px;
  height: 975px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 54%;
  flex-direction: column;
  margin-left: 280px;

  @media (max-width: 1650px) {
    margin-left: 125px;
  }

  @media (max-width: 1400px) {
    margin-left: 50px;
  }

  @media (max-width: 1350px) {
    width: 100%;
    align-items: center;
    margin-left: 0px;
    text-align: center;
    padding: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #004a8c;
  margin-bottom: 20px;
`;

export const ParagraphContainer = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #004a8c;
  margin-bottom: 20px;
  max-width: 700px;
`;
