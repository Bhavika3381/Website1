
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logoimg from "../../assets/logo2.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(26, 26, 29, 0.9)' : 'rgba(51, 51, 51, 0.8)')};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s, box-shadow 0.3s;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background-color: rgba(255, 255, 255, 0.95);
    position: absolute;
    top: 60px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const NavItem = styled(Link)`
  color: ${({ scrolled }) => (scrolled ? '#f1f1f1' : '#fff')};
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  transition: color 0.3s, background-color 0.3s, opacity 0.3s;

  &:hover {
    color: #fff;
    background-color: rgba(0, 123, 255, 0.8);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
    color: #333;
    padding: 8px;
  }
`;

const LoginButton = styled(Link)`
  color: ${({ scrolled }) => (scrolled ? '#f1f1f1' : '#fff')};
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(51, 51, 51, 0.8)' : 'transparent')};
  border: ${({ scrolled }) => (scrolled ? '1px solid #f1f1f1' : '1px solid #fff')};
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s;

  &:hover {
    background-color: rgba(0, 123, 255, 0.8);
    color: #fff;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    color: #333;
    border: none;
    background-color: transparent;
    padding: 12px;
    margin: 10px 0;
    text-align: start;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: ${({ scrolled }) => (scrolled ? '#f1f1f1' : '#fff')};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo>
        <h4>YB</h4>
      </Logo>
      <Hamburger scrolled={scrolled} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavItems open={menuOpen}>
        <NavItem to="/" scrolled={scrolled}>Home</NavItem>
        <NavItem to="/aboutus" scrolled={scrolled}>About Us</NavItem>
        <NavItem to="/services" scrolled={scrolled}>Services</NavItem>
        <NavItem to="/contactus" scrolled={scrolled}>Contact Us</NavItem>
        <NavItem to="/blogs" scrolled={scrolled}>Blogs</NavItem>
        <NavItem to="/blog-products" scrolled={scrolled}>Products</NavItem>
        <NavItem to="/demo" scrolled={scrolled}>Demo</NavItem>
        <LoginButton to="/login" scrolled={scrolled}>Login</LoginButton>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;

