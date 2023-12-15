// index.tsx
import React from 'react';
import {
  AboutSectionContainer,
  ImageContainer,
  TextContainer,
  TitleContainer,
  ParagraphContainer,
} from './style';

const AboutSection = () => {
  return (
    <AboutSectionContainer>
        <img src="placeholder da imagem" />
        <ImageContainer>
            <img src="Placeholder da imagem"/>
        </ImageContainer>
        <TextContainer>
          <TitleContainer>
            SOBRE
          </TitleContainer>
          <ParagraphContainer>
            A Move’s quer espalhar o turismo acessível para todos. Uma plataforma
            de turismo inclusivo, que estará em breve em sua Playstore, e fornece
            informações de acessibilidade para pessoas com mobilidade reduzida em
            atrativos e estabelecimentos turísticos.
          </ParagraphContainer>
          <ParagraphContainer>
            O que mais impulsiona e inspira a Move’s é a inclusão. Buscamos
            propagar o turismo acessível para pessoas com mobilidade reduzida nas
            atividades turísticas e de lazer, através da informação sobre
            acessibilidade universal.
          </ParagraphContainer>
          <ParagraphContainer>
            Inovação e inclusão andam juntas na Move’s.
          </ParagraphContainer>
        </TextContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;

