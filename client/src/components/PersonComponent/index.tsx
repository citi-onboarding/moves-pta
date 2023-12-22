import React from 'react';
import { PersonContainer, PersonTitle, PersonText, PersonImage } from './style';

interface ServiceComponentProps {
    image: string;
    name: string;
    role: string;
    text: string;
}

const PersonComponent: React.FC<ServiceComponentProps> = ({ image, text, name, role }) => {
    return (
        <PersonContainer>
            <PersonImage src={image} alt='Avatar Pessoa' />
            <PersonTitle>{name}</PersonTitle>
            <PersonTitle>{role}</PersonTitle>
            <PersonText>{text}</PersonText>
        </PersonContainer>
    );
};

export default PersonComponent;
