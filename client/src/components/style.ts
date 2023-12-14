// style.ts
import styled from 'styled-components';

export const AboutSectionContainer = styled.section`
  background-color: white;
  position: relative;
  width: 1372px;
  height: 773px;


  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;


export const ImageContainer = styled.div`
  width: 558px;
  height: 372px;
  position: absolute;
  top: 759px;
  left: 113px;
  background-image: url('sobre-bg-1.jpg'); 
  background-size: cover;

  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
    position: static;
  }
`;

export const TextContainer = styled.div`
  display : flex;
  width: 451px;
  height: 352px;
  position: absolute;
  top: 769px;
  left: 695px;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    position: static;
    text-align: center;
  }
`;

export const TitleContainer = styled.h2`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 700;
  line-height: 35.16px;
  text-align: left;
  color: #004A8C;
  margin-bottom: 20px;
`;

export const ParagraphContainer = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.6px;
  text-align: left;
  color: #004A8C;
  margin-bottom: 20px;
`;

