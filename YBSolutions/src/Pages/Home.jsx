
import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '../assets/herosection.jpeg';
import backgroundImage2 from '../assets/back2.webp';
import leftImage from '../assets/sar3.jpeg';
import ser1 from '../assets/erp.jpg';
import ser2 from '../assets/crm2.jpg';
import ser3 from '../assets/account2.jpg';
import ser4 from '../assets/pm.jpg';
import ser5 from '../assets/am.jpg';
import schedule from '../assets/schedule.jpeg';
import wh1 from '../assets/wh12.jpg';
import wh2 from '../assets/wh2.jpg';
import wh3 from '../assets/wh3.jpg';
import wh4 from '../assets/seamless integration.jpg';
import wh5 from '../assets/comprensive support.jpg';
import wh6 from '../assets/Pricing.jpg';
import WhoweAre from '../Components/HomeComponents/WhoweAre';
// import AppointmentBooking from '../Components/AppointmentBooking';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechnologyCar from '../Components/HomeComponents/TechnologyCar';
import AppointmentBooking from '../Components/HomeComponents/AppointmentBooking';


const HomeContainer = styled.div`
  display: flex;
   top: -86px;
   position: relative;
    //  z-index: -1; /* Ensure it stays behind the navbar */
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; /* Prevents horizontal scrollbar */
`;
// section1 
const Section1 = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 80vh; /* Keep section height fixed */
  display: flex;
  margin-bottom: 170px;
  width:100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 50vh;
    margin-bottom:20px;
  }
  @media (max-width: 480px) {
    height: 60vh;
    margin-bottom:20px
  }
`;
const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  height: 250px; /* Set the height of the box */
  margin-top: 450px;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin-top: 200px;
    padding: 10px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-top: 100px;
    padding: 5px;
     background-color: rgba(255, 255, 255, 0);
  }
`;
const Headers = styled.h1`
  font-size: 40px;
  color:#fff;
  padding: 0px 20px;
  @media (max-width: 768px) {
    font-size: 30px;
    padding: 0px 15px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0px 10px;
  }
`;
const Paragraphs = styled.p`
  font-size: 20px;
  padding: 0px 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0px 15px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0px 10px;
    color:white;
  }
`;
const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  span {
    color: #007bff;
  }
`;
const Paragraph = styled.p`
  font-size: 20px;
  color: #666;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  background-color: #fff;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    text-align: left;
  }
`;
const SectionImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;
const SectionContent = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin-top: 20px;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 600px;
    text-align: ${props => (props.right ? 'right' : 'left')};
    margin-left: ${props => (props.right ? '20px' : '0')};
    margin-right: ${props => (props.right ? '0' : '20px')};
  }
`;
const CardsContainer = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 2px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom right, lighred, lightyellow, white);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const InfoCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 170px;
  margin: 10px;
  height: 210px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    background-color: #f9f9f9;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    width: 300px;
   
  }
      @media (max-width: 480px) {
      width:300px;
     
    }
`;
const CardImage = styled.img`
  margin-bottom: 20px;
  border-radius: 50%;
  border: 2px solid #007bff;
  width: 70px;
  height: 70px;
`;
const CardTitle = styled.h3`
  font-size: 1.4em;
  margin: 10px 0;
  color: #333;
`;
const ViewMore = styled.p`
  color: #007bff;
  margin-top: 7%;
  transition: color 0.3s;
  ${StyledLink}:hover & {
    color: #0056b3;
  }
`;
// grid section 
const GridSection = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  padding: 40px 20px;
  text-align: center;
  margin-top: -150px;
`;
const GridHeader = styled.h2`
  font-size: 2rem;
  color: #333;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const GridItem = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const GridItemLogo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;
const GridItemHeader = styled.h3`
  font-size: 1.5rem;
  float: left;
  color: #444;
`;
const GridItemText = styled.p`
  font-size: 20px;
  color: #666;
`;
// schedule section 
const OuterBox = styled.div`
  padding: 20px;
  background-color: #f8f9fa ;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ScheduleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const ScheduleBox = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const ScheduleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ScheduleText = styled.div`
  flex: 1;
`;
const ScheduleHeader = styled.h2`
  font-size: 2rem;
  color: #333;
    @media (max-width: 480px) {
    font-size:20px;
  }
`;
const ScheduleParagraph = styled.p`
  font-size: 1.1rem;
  color: #666;
      @media (max-width: 480px) {
    font-size:0.8rem;
  }
`;
const ScheduleButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
const ScheduleImage = styled.img`
  width: 40%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const StepsSection = styled.div`
  width: 100%;
  background: linear-gradient(to bottom right, lightblue, lightgreen, lightblue);
  padding: 40px 20px;
  text-align: center;
`;
const StepsHeader = styled.h2`
  font-size: 2rem;
  color: #333;
`;
const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Step = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
const StepHeader = styled.h3`
  font-size: 1.5rem;
  color: #444;
`;
const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;
// section 6 
const SectionTech = styled.div`
  width: 100%;
  // background-image: url(${backgroundImage2});
  background-color: #f8f9fa;
  padding: 40px 20px;
  text-align: center;
  height: 500px;
`;

const Headerss = styled.h1`
  
`
const Home = () => {

    useEffect(() => {
      AOS.init({
        duration: 1200, // Duration of the animation in milliseconds
      });
    }, []);
  return (
    <HomeContainer>
            <Helmet>
        <title>Revolutionise Your Business with Custom Cloud-Based Software Solutions | SAR Custom Solutions</title>
        <meta
          name="description"
          content="Empower your business with SAR Custom Solutions' custom ERP, CRM, Project Management, Appointment Booking, and Accounting Software. Discover cutting-edge cloud-based applications tailored to your specific needs, ensuring seamless integration, maximum efficiency, and comprehensive support. Start your journey towards success today!"
        />
        <meta
          name="keywords"
          content="Custom software solutions, Cloud-based applications, ERP software, CRM software, Project Management tools, Appointment Booking software, Accounting software, Business efficiency, Seamless integration, Comprehensive support"
        />
      </Helmet>
        {/* section 1  */}
        <Section1 data-aos="fade-up">
        <Box>
          <Headers>"<span style={{color: "#007bff"}}>Revolutionise</span> Your Business with cloud-Based Software Solutions"</Headers>
          <Paragraphs>
           Empowering <span style={{color: "#007bff"}}>business</span> with custom ERP, CRM, Project Management, Appointment Booking, and Accounting Software.
          </Paragraphs>
        </Box>
      </Section1>
      {/* section 2  */}
      
    <h1>"Cutting-Edge Software to <span style={{color: "#007bff"}}>Elevate Your Business</span> Operations"</h1>
      <Paragraph>“One step at a time. You will get there.”</Paragraph>
      
      <CardsContainer data-aos="fade-up">
    <StyledLink to="/erp-software-service">
      <InfoCard>
        <CardImage style={{ height: "90px", width: "90px" }} src={ser1} alt="ERP Software Service" />
        <CardTitle>ERP Software Service</CardTitle>
        <ViewMore>View More</ViewMore>
      </InfoCard>
    </StyledLink>
    <StyledLink to="/crm-software-service">
      <InfoCard>
        <CardImage style={{ height: "90px", width: "90px" }} src={ser2} alt="CRM Software Service" />
        <CardTitle>CRM Software Service</CardTitle>
        <ViewMore>View More</ViewMore>
      </InfoCard>
    </StyledLink>
    <StyledLink to="/accounting-finance-service">
      <InfoCard>
        <CardImage style={{ height: "90px", width: "90px" }} src={ser3} alt="Accounting & Finance Software Service" />
        <CardTitle>Accounting & Finance </CardTitle>
        <ViewMore>View More</ViewMore>
      </InfoCard>
    </StyledLink>
    <StyledLink to="/project-management-service">
      <InfoCard>
        <CardImage style={{ height: "90px", width: "90px" }} src={ser4} alt="Project Management Tool Services" />
        <CardTitle>Project Management </CardTitle>
        <ViewMore>View More</ViewMore>
      </InfoCard>
    </StyledLink>
    <StyledLink to="/appointment-booking-service">
      <InfoCard>
        <CardImage style={{ height: "90px", width: "90px" }} src={ser5} alt="Appointment Booking Software Services" />
        <CardTitle>Appointment Booking </CardTitle>
        <ViewMore>View More</ViewMore>
      </InfoCard>
    </StyledLink>
  </CardsContainer>
  
      {/* sectiom 3  */}
      <Section data-aos="fade-up" reverse>
        <SectionImage src={leftImage} alt="About Us" />
        <SectionContent>
          <h3>What sets us apart</h3>
          <Header>We Help You Build & Grow Business.</Header>
          <Paragraph>At SAR Custom Solutions, we go beyond providing software solutions. We are your partners in growth, committed to understanding your unique business needs and delivering tailored ERP, CRM, appointment booking, accounting, finance, and project management tools. Our expertise and dedicated support ensure seamless integration, continuous improvement, and maximized efficiency, empowering your business to thrive and reach new heights. With SAR Custom Solutions, you gain a reliable ally focused on your success.</Paragraph>
        </SectionContent>
      </Section>
      <div style={{width:"100%",height:"3px",background:"#f8f1f0",marginTop:"5px"}}></div>
      
      {/* section 4 */}
       <SectionTech >
        <h1>Our Strength in <span style={{color:"#007bff"}}>Technology</span></h1>
       <TechnologyCar style={{marginTop:"100px"}}/>
       </SectionTech>
       {/* section 5 */}
      <GridSection>
        <GridHeader>Why Choose Us?</GridHeader>
        <GridContainer>
          <GridItem>
            <GridItemLogo src={wh1} alt="Tailored for Your Business" />
            <GridItemHeader>1. Industry Expertise</GridItemHeader>
            <GridItemText>At <span style={{color:"#007bff"}}>SAR Custom Solutions</span>, we pride ourselves on our deep
industry knowledge and technical expertise. Our team of seasoned professionals
understands the unique challenges faced by businesses today and is dedicated to
delivering innovative software solutions that <span style={{color:"#007bff"}} >drive success</span></GridItemText>
          </GridItem>
          <GridItem>
            <GridItemLogo src={wh2} alt="Cutting-Edge Technology" />
            <GridItemHeader>2. Custom-Tailored Solutions</GridItemHeader>
            <GridItemText>Every business is unique, and so are its needs. We
specialize in developing <span style={{color:"#007bff"}}>custom software solutions</span> that are tailored to fit your specific
requirements, ensuring optimal performance and maximum ROI.</GridItemText>
          </GridItem>
          <GridItem>
            <GridItemLogo src={wh3} alt="Reliable Support" />
            <GridItemHeader>3. Cutting-Edge Technology</GridItemHeader>
            <GridItemText>Stay ahead of the competition with our state-of-the-art
software solutions. We leverage the <span style={{color:"#007bff"}}>latest technologies</span> and industry best practices to
create robust, scalable, and secure <span style={{color:"#007bff"}}>cloud-based applications</span>.</GridItemText>
          </GridItem>
          <GridItem>
            <GridItemLogo src={wh4} alt="Scalability" />
            <GridItemHeader>4. Seamless Integration</GridItemHeader>
            <GridItemText> Our solutions are designed to integrate seamlessly with
your existing systems, ensuring a smooth transition and <span style={{color:"#007bff"}}>minimal disruption</span> to your
operations. We prioritize <span style={{color:"#007bff"}}>user-friendly interfaces</span> and intuitive designs for a seamless
user experience.</GridItemText>
          </GridItem>
          <GridItem>
            <GridItemLogo src={wh5} alt="User-Friendly Interfaces" />
            <GridItemHeader>5. Comprehensive Support</GridItemHeader>
            <GridItemText>Your success is our priority. We offer <span style={{color:"#007bff"}}>comprehensive
            support</span> and maintenance services to ensure your software runs smoothly and
efficiently. Our dedicated support team is always available to assist you with any issues
or questions.</GridItemText>
          </GridItem>
          <GridItem>
            <GridItemLogo src={wh6} alt="Transparency" />
            <GridItemHeader>6. Competitive Pricing</GridItemHeader>
            <GridItemText> Get the best value for your investment with our competitive
pricing models. We offer flexible pricing options that cater to businesses of all sizes,
ensuring you receive top-quality <span style={{color:"#007bff"}}>software solutions</span> within your budget</GridItemText>
          </GridItem>
        </GridContainer>
      </GridSection>
      {/*  Section 6  */}
       <WhoweAre/>
       {/* New Section with Steps */}
       <StepsSection data-aos="fade-up">
        <h3>How We Work</h3>
        <StepsHeader>We Are Just Three Steps Away</StepsHeader>
        <StepsContainer>
          <Step>
            <StepHeader>Step 1:<span style={{color:"#007bff"}}>Let's Talk!</span></StepHeader>
            <StepDescription>Connect with us to share details about your requirements. It’s a friendly conversation.</StepDescription>
          </Step>
          <Step>
            <StepHeader>Step 2:<span style={{color:"#007bff"}}>Let's Plan Together</span></StepHeader>
            <StepDescription>We will sort out the details of your project, decide how our team can help, and get everyone on board. We’ll make a plan that works for both of us.</StepDescription>
          </Step>
          <Step>
            <StepHeader>Step 3:<span style={{color:"#007bff"}}>Get Started</span></StepHeader>
            <StepDescription>We’ll jump into action once we agree on what needs to be done. We’ll update you on how things are going and make changes as needed. It’s a journey we take together!</StepDescription>
          </Step>
        </StepsContainer>
      </StepsSection>
        {/* New Section */}
        <OuterBox>
      <ScheduleSection>
        <ScheduleBox>
          <ScheduleContent >
            <ScheduleText>
              <ScheduleHeader>Get Started with Our Powerful Cloud Management Service Today</ScheduleHeader>
              <ScheduleParagraph>Interested in our services? Schedule a consultation call with our experts today!</ScheduleParagraph>
              {/* <ScheduleButton>Schedule Call</ScheduleButton> */}
              <AppointmentBooking/>
            </ScheduleText>
            <ScheduleImage src={schedule} alt="Schedule Image" />
          </ScheduleContent>
        </ScheduleBox>
      </ScheduleSection>
    </OuterBox>
    </HomeContainer>
  );
};
export default Home;
