import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import backgroundImage from '../assets/product3.jpg';
import Product1 from '../assets/pro2.jpg';

const Container = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;
  padding: 0 10px;
  box-sizing: border-box;
`;

const Section1 = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center; 
  height: 400px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 250px;
    padding: 0 10px;
  }
`;

const Header = styled.h1`
  font-size: 4em;
  color: #fff;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #fff;
  margin: 20px auto 0;
  
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Section2 = styled.div`
  width: 100%;
  padding: 50px 20px;
  display: flex;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProductCard = styled.div`
  width: 50%;
  display: flex;
  background: white;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  float: left;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  transition: filter 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
  }
`;

const ProductInfo = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: grey;
  margin: 10px 0 0;
  
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ViewMoreButton = styled.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 1em;
  align-self: flex-start;

  &:hover {
    background: #fff;
    color: #333;
    border: 1px solid #333;
  }
`;

const Product = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
      navigate(path);
    };

  return (
    <Container>
      <Helmet>
        <title>Our Products - ERP Solutions and More</title>
        <meta name="description" content="Explore our ERP solutions and other products designed to optimize your business operations. Discover how our solutions can help streamline your processes and drive growth." />
        <meta name="keywords" content="Products, ERP Solutions, Business Optimization, Software Solutions, Custom Software Development" />
      </Helmet>
      <Section1>
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <Header>Our Products</Header>
          <Paragraph>
            Explore our range of products including ERP solutions tailored to meet your business needs. Discover how our products can enhance your operations and drive growth.
          </Paragraph>
        </div>
      </Section1>
      <Section2>
        <ProductCard onClick={handleCardClick}>
          <ProductImage src={Product1} alt="ERP Solution" />
          <ProductInfo>
            <ProductTitle>ERP Solution</ProductTitle>
            <ProductDescription>Our ERP solution helps you streamline business processes, manage resources efficiently, and improve overall productivity.</ProductDescription>
            {/* <ViewMoreButton onClick={handleViewMoreClick}>View More</ViewMoreButton> */}
            <ViewMoreButton onClick={() => handleCardClick('/blog-product-erp')}>View More</ViewMoreButton>
          </ProductInfo>
        </ProductCard>
      </Section2>
    </Container>
  );
};

export default Product;
