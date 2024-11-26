import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo2.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px 20px;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 100px;
  height:50px;
`;

const Address = styled.p`
  margin-top: 10px;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const LinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  color:white;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  color: white;
`;

const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.a`
  color: white;
  margin-right: 10px;
  font-size: 24px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <Logo src={logo} alt="Company Logo" /> <br />
        <Address>
          518, Global Business Hub, Opposite Eon IT Park, Kharadi, <br /> 
          Pune – 411014
          <br /> info@sarcustomize.com 
          <br /> 082375 25097
        </Address>
      </LogoSection>
      <LinksSection>
        <Section>
          <SectionTitle>Social Media</SectionTitle>
          <SocialMediaIcons>
            <Icon href="https://www.instagram.com/SARSoftwaredev" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Icon>
            <Icon href="https://www.facebook.com/sarcustomsolutions/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Icon>
            <Icon href="https://www.linkedin.com/in/rohit-lokhande-b854302b4/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Icon>
          </SocialMediaIcons>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/aboutus">About Us</LinkItem>
          <LinkItem href="/services">Services</LinkItem>
          <LinkItem href="/contactus">Contact Us</LinkItem>
          <LinkItem href="/blogs">Blog</LinkItem>
        </Section>
        <Section>
          <SectionTitle>Our Services</SectionTitle>
          <LinkItem href="/erp-software-service">ERP Development</LinkItem>
          <LinkItem href="/crm-software-service">CRM Development</LinkItem>
          <LinkItem href="/project-management-service">Project Management Tool</LinkItem>
          <LinkItem href="/accounting-finance-service">Account & Finance Software</LinkItem>
          <LinkItem href="/appointment-booking-service">Appointment Booking Software</LinkItem>
        </Section>
      </LinksSection>
    </FooterContainer>
  );
};

export default Footer;
