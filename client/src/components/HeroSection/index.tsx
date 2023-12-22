import React from 'react';
import { HeroSectionContainer, ImageContainer, SobreImage, TextContainer, Title, Text } from './style';
import { AppImage } from 'assets'; // Assuming you have this image imported
import { Button } from '@mui/material';
import { Link } from 'react-scroll';

type AboutSectionProps = {
    id?: string;
};

export default function AboutSection({ id }: AboutSectionProps) {
    return (
        <HeroSectionContainer id={id}>
            <ImageContainer />
                <SobreImage src={AppImage} alt='MOVES APP'/>
            <ImageContainer />
            <TextContainer>
                <Text>PREPARA A MALA E EMBARCA NESSA COM A GENTE!</Text>
                <Title>PROPAGANDO O TURISMO COM ACESSIBILIDADE.</Title>
                <Link
                    to="contato"
                    smooth={true}
                    duration={500}
                    offset={90}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            width: '192px',
                            height: '40px',
                            backgroundColor: '#004a8c',
                            '&:hover': {
                                backgroundColor: '#003366', // Change color on hover if needed
                            },
                            fontSize: '16px',
                        }}
                    >
                        SAIBA MAIS
                    </Button>
                </Link>
            </TextContainer>
        </HeroSectionContainer>
    );
}
