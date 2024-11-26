// TechnologiesCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pythonImage from '../../assets/c1.jpg';
import reactImage from '../../assets/cc11.jpg';
import angularImage from '../../assets/cc2.jpg';
import phpImage from '../../assets/cc5.jpg';
import javaImage from '../../assets/cc3.jpg';
import javascriptImage from '../../assets/cc4.jpg';
import sqlImage from '../../assets/cc6.jpg';
import mongodbImage from '../../assets/cc7.jpg';

const technologies = [
  { id: 1, name: 'Python', image: pythonImage },
  { id: 2, name: 'React', image: reactImage },
  { id: 3, name: 'Angular', image: angularImage },
  { id: 4, name: 'PHP', image: phpImage },
  { id: 5, name: 'Java', image: javaImage },
  { id: 6, name: 'JavaScript', image: javascriptImage },
  { id: 7, name: 'SQL', image: sqlImage },
  { id: 8, name: 'MongoDB', image: mongodbImage },
];

const TechnologyCar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {technologies.map((tech) => (
          <TechnologyCard key={tech.id}>
            <TechnologyImage src={tech.image} alt={tech.name} />
            <TechnologyName>{tech.name}</TechnologyName>
          </TechnologyCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default TechnologyCar;

const CarouselContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e0e0e0 100%);
  position: relative;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const TechnologyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const TechnologyImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 20px;
  // text-align :center;
  // align-items:center;
  // justify-content:center;
  // margin-left: 70px;
  margin:auto;
  border: 3px solid #e0e0e0;
  border-radius: 50%;
  transition: border-color 0.3s;

  &:hover {
    border-color: #333;
  }
`;

const TechnologyName = styled.h3`
  font-size: 20px;
  color: #333;
  text-align: center;
  // margin-right: 40px;
  margin-top: 10px;
  font-weight: 600;
`;
