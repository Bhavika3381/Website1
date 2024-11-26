import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/us1.jpg';
import image2 from '../../assets/us2.jpg';
import image3 from '../../assets/us3.jpg';
import image4 from '../../assets/us4.jpg';
import image5 from '../../assets/us5.jpg';
import image6 from '../../assets/join us2.jpg';

const items = [
  { id: 1, title: 'Our Story', description: 'Founded by industry experts with a vision to revolutionize business software, SAR Custom Solutions has grown into a leading provider of custom software solutions. We understand that each business is unique, and we pride ourselves on delivering tailored solutions that meet the specific needs of our clients.', image: image1 },
  { id: 2, title: 'Our Expertise', description: 'With a team of seasoned professionals and tech enthusiasts, we bring extensive knowledge and experience to every project. Our expertise spans across various domains, including ERP, CRM, project management, appointment booking, and accounting & finance software. We leverage the latest technologies to create robust, scalable, and secure solutions that deliver real results.', image: image2 },
  { id: 3, title: 'Our Values', description: '1. Innovation: We are committed to continuous innovation, always exploring new technologies and methodologies to stay ahead of the curve and deliver the best solutions to our clients. 2. Quality: Quality is at the heart of everything we do. We adhere to the highest standards in software development to ensure our solutions are reliable, efficient, and user-friendly. 3. Client-Centric Approach: Our clients are our top priority. We work closely with you to understand your business goals and challenges, providing solutions that are tailored to your unique needs. 4. Integrity: We build trust through transparency and honesty. Our clients can count on us to deliver on our promises and maintain the highest ethical standards.', image: image3 },
  { id: 4, title: 'Global Reach', description: 'As a global company, we serve businesses of all sizes, from startups to large enterprises, across various industries and geographies. Our global presence allows us to understand diverse market needs and provide solutions that cater to a worldwide audience.', image: image4 },
  { id: 5, title: 'Our Vision', description: 'Our vision is to be the trusted partner for businesses seeking to leverage technology for growth and efficiency. We aim to lead the industry with our innovative solutions, exceptional service, and unwavering commitment to client success.', image: image5 },
  { id: 6, title: 'Join Us on Our Journey', description: 'We invite you to join us on our journey towards digital transformation. Discover how SAR Custom Solutions can help you unlock new opportunities, enhance operational efficiency, and achieve your business goals.', image: image6 },
];

const WhoweAre = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Container>
      <Header>
        <h1>Empowering Businesses with <span style={{ color: "#00b7ff" }}>Innovative Software</span> Solutions</h1>
        <Paragraph>
          At <span style={{ color: "#00b7ff" }}>SAR Custom Solutions</span>, we are passionate about transforming the way businesses
          operate through cutting-edge cloud-based software solutions. Our mission is to
          empower organizations with innovative tools that streamline processes, enhance
          productivity, and drive growth.
        </Paragraph>
      </Header>
      <ContentContainer>
        <LeftSide>
          <h1 style={{color:"white"}}><span style={{color:"red"}}>SAR</span> Custom Solutions</h1>
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <Item
                onClick={() => setSelectedItem(item)}
                isSelected={selectedItem.id === item.id}
              >
                {item.title}
              </Item>
              {selectedItem.id === item.id && (
                <MobileRightSide>
                  <h2>{selectedItem.title}</h2>
                  <p>{selectedItem.description}</p>
                  <Image src={selectedItem.image} alt={selectedItem.title} />
                </MobileRightSide>
              )}
            </React.Fragment>
          ))}
        </LeftSide>
        <RightSide>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <Image src={selectedItem.image} alt={selectedItem.title} />
        </RightSide>
      </ContentContainer>
    </Container>
  );
};

export default WhoweAre;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150vh;
  background-color: #f0f2f5;
  font-family: 'Arial', sans-serif;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 20px;
  width: 90%;
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: 20px;
  color: #666666;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
     @media (max-width: 480px) {
    flex-direction: column;
    width:100%;
  }
`;

const LeftSide = styled.div`
  width: 30%;
  background: linear-gradient(to bottom right, black, blue, black);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
      @media (max-width: 480px) {
    padding:10px;

  }
`;

const Item = styled.div`
  background-color: ${(props) => (props.isSelected ? '#fff' : '#f0f0f0')};
  color: black;
  padding: 15px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #D3D3D3;
    transform: translateY(-2px);
  }
        @media (max-width: 480px) {
    margin-right:20px;  
  }
`;

const RightSide = styled.div`
  width: 70%;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    display: none;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #2a3d66;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333333;
  }
      
`;

const MobileRightSide = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;

    h2 {
      margin-bottom: 10px;
      font-size: 20px;
      color: #2a3d66;
    }

    p {
      font-size: 16px;
      line-height: 1.4;
      color: #333333;
    }
      Image {
      height:50px;
      width:50px;
      }
  }
    @media (max-width:480px){
    margin-right:20px;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
