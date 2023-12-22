import styled from "styled-components";
import Image from "next/image"; // Import the next/image component

export const ServiceSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 30px;
  flex-wrap: wrap;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #004a8c;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #004a8c;
`;
