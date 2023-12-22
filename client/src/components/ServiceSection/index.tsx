import React from 'react';
import { ServiceSectionContainer, ServicesContainer, Title, Text } from './style';
import ServiceComponent from '../ServiceComponent/index';
import { Service1, Service2, Service3 } from 'assets'; // Assuming you have these images imported

export default function ServiceSection() {
    return (
        <ServiceSectionContainer>
            <Title>SERVIÇOS</Title>
            <Text>
                A Move’s é uma tecnologia da informação e comunicação (TIC) em formato de aplicativo de Smartphone, que fornece, em uma só plataforma:
            </Text>
            <ServicesContainer>
                <ServiceComponent image={Service1} text="Informações mais específicas de elementos de acessibilidade para PMR em estabelecimentos comerciais, redes de hospedagem, transportes e atividades de lazer e atrativos turísticos." />
                <ServiceComponent image={Service2} text="Diferentemente das soluções existentes no presente momento, a TIC irá contemplar um número maior de informações de elementos de acessibilidade por tipo de mobilidade reduzida, ressaltando a individualidade de cada usuário. " />
                <ServiceComponent image={Service3} text="De maneira descritiva, visual e/ou audiovisual,a Move’s transmite informações mais específicas,com o intuito de haver maior compatibilidade com a realidade, a fim de auxiliar, bem como, estimular o turismo e o lazer de PMR. " />
            </ServicesContainer>
        </ServiceSectionContainer>

    );
}
