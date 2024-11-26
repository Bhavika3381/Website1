import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ButtonsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;

const FloatingButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #25d366; /* WhatsApp green */
  color: white;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #128c7e;
    transform: translateY(-3px);
  }

  &:nth-child(2) {
    background-color: #007bff; /* Blue color for call */
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const FloatingButtons = () => (
  <ButtonsContainer>
    <FloatingButton
      href="https://wa.me/8237525097" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </FloatingButton>
    <FloatingButton href="tel:8237525097"> 
      <FontAwesomeIcon icon={faPhone} />
    </FloatingButton>
  </ButtonsContainer>
);

export default FloatingButtons;
