import styled from "styled-components";
import Image from "next/image"; // Import the next/image component

export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 364px;
    height: 335px
`;

export const ServiceImage = styled(Image)`
    width: 280px;
    height: 170px;
    margin-bottom: 10px;
`;

export const ServiceText = styled.p`
    font-size: 16px;
    text-align: center;
    color: #004a8c;
`;