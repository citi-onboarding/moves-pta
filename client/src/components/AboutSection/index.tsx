import React from 'react';
import {
  AboutSectionContainer,
  ImageContainer,
  SobreImage,
  TextContainer,
  Title,
  ParagraphContainer,

} from './style';
import { SobreImagem } from 'assets'; // Assuming you have this image imported

type AboutSectionProps = {
    id?: string;
};

export default function AboutSection({ id }: AboutSectionProps) {
    return (
        <AboutSectionContainer id={id}>
            <ImageContainer />
                <SobreImage src={SobreImagem} alt='Somos uma comunidade'/>
            <ImageContainer />
            <TextContainer>
                <Title>SOBRE</Title>
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
}
