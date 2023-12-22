import styled from "styled-components";

export const PersonSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/img/person-bg.svg');
  background-size: cover;
  background-position: center;
  width: 100%; /* Ensure minimum width is 100% of the viewport */
  min-height: 113vh; /* Set minimum height to 100% of the viewport height */
  padding: 100px;
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  margin-top: 80px;
  flex-wrap: wrap;
  gap: 45px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #004a8c;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: #004a8c;
  max-width: 1400px;
`;
