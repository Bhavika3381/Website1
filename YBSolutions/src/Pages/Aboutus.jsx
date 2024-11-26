import React,{useEffect} from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/aboutus.jpeg';
import software from '../assets/software.jpg';
import teamwork from '../assets/employee.webp';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import {useNavigate} from "react-router-dom";
import 'aos/dist/aos.css';

const Container = styled.div`
 position: relative;
  top: -86px;;
  // z-index: -1; /* Ensure it stays behind the navbar */
  width: 100%;
  font-family: Arial, sans-serif;
`;

const Section1 = styled.div`
  background: url(${backgroundImage}) center/cover no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:480px){
  height:40vh;
  }
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
@media (max-width:480px){

}

`;

const Header = styled.h1`
  font-size: 4em;
  color: #fff;

  @media(max-width:480px){
  
  font-size:2em;
  padding-left:10px;
  margin-bottom:-20px
  }
`;

const Header2 = styled.h1`
  font-size: 1em;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #fff;

    @media(max-width:480px){
  font-size:1em;
  padding:10px
  }
`;

const Paragraph2 = styled.p`
  font-size: 18px;
  color: #333;
`;
const Section2 = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  margin-top: -50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 35%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  width: 50%;
  padding-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  background-color: #f9f9f9;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px;
  }
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CardHeader = styled.h2`
  font-size: 1.5em;
  color: #007BFF;
  margin-bottom: 10px;
`;

const CardParagraph = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.5;
`;

const Section4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    padding: 20px;
    display:flex;
    flex-direction: column;
  }
`;

const Section4Content = styled.div`
  width: 50%;
  padding-right: 20px;
  border: 1px solid #fff;
  border-radius: 0px;
  padding: 20px;
  background: white;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Section4Header = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const Section4Paragraph = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.5;
`;

const Aboutus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation in milliseconds
    });
  }, []);
  const handleLearnMoreClick = () => {
    navigate('/services');
  };
  return (
    <Container>
      <Helmet>
        <title>About Us - SAR Custom Solutions</title>
        <meta name="description" content="Learn about SAR Custom Solutions, a leading provider of tailored software solutions to help grow your business with innovation and excellence." />
        <meta name="keywords" content="SAR Custom Solutions, software solutions, business growth, IT solutions, cloud-based solutions, innovation" />
      </Helmet>
      <Section1 data-aos="fade-up">
        <Overlay>
          <Box>
            <Header>About us</Header>
            <Paragraph>
              We are dedicated to providing the best solutions for your business needs.
            </Paragraph>
          </Box>
        </Overlay>
      </Section1>

      <Section2 data-aos="fade-up">
        <Image src={software} alt="About Us" />
        <Content>
          <Header2>Grow your <span style={{color:"#007bff"}} >Business</span> With Our Tailored Software Solutions</Header2>
          <Paragraph2>
            “SAR Custom Solutions”, where innovation isn’t just a concept; it’s our heartbeat. We are architects of tomorrow, crafting bespoke cloud-based solutions that redefine the landscape of possibilities for businesses worldwide.
          </Paragraph2>
          <ul>
            <li style={{color:"grey"}}>Professional IT Solutions</li><br />
            <li style={{color:"grey"}}>Experience Team Members</li> <br />
            <li style={{color:"grey"}}>Awards Winning Solutions Company</li><br />
          </ul>
          <Button onClick={handleLearnMoreClick} >Learn More</Button>
        </Content>
      </Section2>

      <Section3 data-aos="fade-up">
        <Card>
          <CardHeader>Who We Are</CardHeader>
          <CardParagraph>
            We are more than just a software solutions provider; we are a team of passionate innovators, collaborators, and solution architects dedicated to transforming ideas into reality. Our diverse team brings together a wealth of expertise across various domains, from software engineering and design to project management and business development. United by a shared commitment to excellence and a relentless pursuit of innovation, we leverage our collective strengths to deliver exceptional solutions that drive real-world impact.
          </CardParagraph>
        </Card>
        <Card>
          <CardHeader>Our Mission</CardHeader>
          <CardParagraph>
            We are driven by a singular mission: to empower businesses and individuals to thrive in the digital age through innovative software solutions. We believe that technology should not be a barrier but a catalyst for growth, efficiency, and transformation. Our commitment lies in crafting bespoke software solutions that are not just functional, but intuitive, scalable, and tailored to meet the unique needs of our clients.
          </CardParagraph>
        </Card>
        <Card>
          <CardHeader>Our Vision</CardHeader>
          <CardParagraph>
            Our vision is to be at the forefront of shaping the future of software excellence. We envision a world where technology seamlessly integrates into every aspect of life, enhancing experiences, driving innovation, and enabling limitless possibilities. We aspire to be recognized globally as a beacon of innovation, setting new standards of excellence in software development. Our vision encompasses a commitment to continuously evolve, adapt, and innovate, staying ahead of technological trends and pioneering breakthrough solutions that redefine industries.
          </CardParagraph>
        </Card>
      </Section3>

      <Section4 data-aos="fade-up">
        <Section4Content>
          <Section4Header>It is teamwork that makes the dream work.</Section4Header>
          <Section4Paragraph>
            Our software services team is dedicated to delivering exceptional results for our clients. We understand that success is built on a foundation of hard work, collaboration, and an unwavering commitment to excellence. Our approach ensures that every project we undertake is executed with precision and attention to detail, exceeding client expectations by fostering a collaborative environment, prioritizing client needs, and maintaining a focus on continuous improvement, we deliver exceptional solutions that drive our clients’ success. Our unwavering dedication ensures that we remain a trusted partner, capable of meeting the evolving demands of the software industry.
          </Section4Paragraph>
        </Section4Content>
        <Image style={{ width: "100%", maxWidth: "600px", height: "auto" }} src={teamwork} alt="Our Vision" />
      </Section4>
    </Container>
  );
};

export default Aboutus;
