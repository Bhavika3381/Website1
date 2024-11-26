
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/sarlogo.png';
import logo2 from '../../assets/logo2.png';
import { useState, useEffect } from 'react';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ scrolled }) => (scrolled ? 'white' : 'transparent')};
  position: sticky;
  top: 0;
  z-index: 1000;
    box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s, box-shadow 0.3s;

    @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
        @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  
   
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    margin-right: 10px;
  }

   @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;



const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin:auto;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background-color: white;
    position: absolute;
    top: 60px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(Link)`
  color: ${({ scrolled }) => (scrolled ? 'black' : 'white')};
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  border-radius: 5px;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

   @media (max-width: 768px) {
    margin: 5px 0;
    color: black;
  }
`;

const LoginButton = styled(Link)`
  color: ${({ scrolled }) => (scrolled ? 'black' : 'white')};
  background-color: ${({ scrolled }) => (scrolled ? 'white' : 'transparent')};
  border: ${({ scrolled }) => (scrolled ? '1px solid black' : '1px solid white')};
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #007bff;
  }

  @media (max-width: 768px) {
        color: black;
        border: none;
        position: relative;
        text-align: start;
        padding: 12px;
        text-decoration: none;
        left: -20px;
  }
      @media (max-width: 480px) {
         color: black;
        border: none;
        position: relative;
        text-align: start;
        padding: 12px;
        text-decoration: none;
        left: -20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    color: ${({ scrolled }) => (scrolled ? 'black' : 'white')};
  }

`;

const HomeNav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logo2);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight * 0.6) {
        setScrolled(true);
        setLogoSrc(logo);
      } else {
        setScrolled(false);
        setLogoSrc(logo2);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo>
        {/* <img src={logoSrc} alt="Sarcustom Logo" /> */}
        <h4>YB</h4>
      </Logo>
      <Hamburger scrolled={scrolled} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavItems  open={menuOpen}>
        <NavItem to="/" scrolled={scrolled}>Home</NavItem>
        <NavItem to="/aboutus" scrolled={scrolled}>About Us</NavItem>
        <NavItem to="/services"scrolled={scrolled}>Services</NavItem>
        <NavItem to="/contactus"scrolled={scrolled}>Contact Us</NavItem>
        <NavItem to="/blogs"scrolled={scrolled}>Blogs</NavItem>
        <NavItem to="/blog-products"scrolled={scrolled}>Products</NavItem>
        <NavItem to="/demo"scrolled={scrolled}>Demo</NavItem>
        <LoginButton to="/login"scrolled={scrolled}>Login</LoginButton>
      </NavItems>
    </NavbarContainer>
  );
};

export default HomeNav;

