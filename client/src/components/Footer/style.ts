import styled from 'styled-components';
import Image from 'next/image'; // Import the next/image component

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 243px;
  background-color: #004A8C;
  align-items: center;
  flex-direction: column;
  text-align: center;
  z-index: 999;
`;

export const IconContainer = styled.div`

    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.p`
    font-size: 16px;
    margin-top: 20px;
    font-weight: 700;
    color: #ffffff;
`;

export const Text = styled.p`
    font-size: 14px;
    margin-top: 10px;
    color: #ffffff;
    margin-bottom: 40px;
`;

export const IconImage = styled(Image)`
    cursor: pointer;
    margin: 0 7px;
`;
