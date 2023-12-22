import styled from "styled-components";
import Image from "next/image"; // Import the next/image component

export const PersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 364px;
    height: 335px;
    margin-bottom: 100px;
`;
export const PersonImage = styled(Image)`
    width: 223px;
    height: 223px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const PersonTitle = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #004a8c;
`;

export const PersonText = styled.p`
    font-size: 16px;
    text-align: center;
    color: #004a8c;
    margin-top: 10px;
`;