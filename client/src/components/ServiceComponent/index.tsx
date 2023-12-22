import React from 'react';
import { ServiceContainer, ServiceImage, ServiceText } from './style';

interface ServiceComponentProps {
    image: string;
    text: string;
}

const ServiceComponent: React.FC<ServiceComponentProps> = ({ image, text }) => {
    return (
        <ServiceContainer>
            <ServiceImage src={image} alt="service" />
            <ServiceText>{text}</ServiceText>
        </ServiceContainer>
    );
};

export default ServiceComponent;
