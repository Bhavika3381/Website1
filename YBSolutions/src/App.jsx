// // App.jsx
// import React from 'react';
// import './App.css'
// import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
// // import { Helmet } from 'react-helmet-async';
// // import Home from './Pages/Home';
// // import Aboutus from './Pages/Aboutus';
// // import Services from './Pages/Services';
// // import Contactus from './Pages/Contactus';
// // import Blogs from './Pages/Blogs';
// // import Login from './Pages/Login';
// // import Navbar from './Components/Navbar/Navbar';
// // import Footer from './Components/Footer/Footer';
// // import FirstBlog from './Components/Blogs/FirstBlog';
// // import SecondBlog from './Components/Blogs/SecondBlog';
// // import ThirdBlog from './Components/Blogs/ThirdBlog';
// // import FourthBlog from './Components/Blogs/FourthBlog';
// // import FifthBlog from './Components/Blogs/FifthBlog';
// // import SixthBlog from './Components/Blogs/SixthBlog';
// // import ErpSoftwareService from './Components/Cards/ErpSoftwareService';
// // import CrmSoftwareService from './Components/Cards/CrmSoftwareService';
// // import AccountingFinanceSoftwareService from './Components/Cards/AccountingFinanceSoftwareService';
// // import ProjectManagementToolServices from './Components/Cards/ProjectManagementToolServices';
// // import AppointmentBookingSoftwareServices from './Components/Cards/AppointmentBookingSoftwareServices';
// import FloatingButtons from './Components/Buttons/FloatingButton';
// import HomeNav from './Components/Navbar/HomeNav';
// import ScrollToTop from './Components/Scroll/ScrollToTop'
// import Demo from './Pages/Demo';
// import Aboutus from './Pages/Aboutus';
// import Service from './Pages/Service';
// import Contactus from './Pages/Contactus';
// import Product from './Pages/Product';
// import Login from './Pages/Login';
// // import CardsPage from './Components/LoginComponents/CardsPage';
// // import Card1 from './Components/LoginComponents/Card1';
// // import Card2 from './Components/LoginComponents/Card2';
// // import Card3 from './Components/LoginComponents/Card3';
// // import Seventhblog from './Components/Blogs/Seventhblog';
// // import EightBlog from './Components/Blogs/EightBlog';
// // import NineBlog from './Components/Blogs/NineBlog';
// // import Tenblog from './Components/Blogs/Tenblog';
// // import KeyboardWizard from './Components/Blogs/KeyboardWizard';
// // import IntegratingAppointmentbooking from './Components/Blogs/IntegratingAppointmentbooking';
// // import BlogThirteen from './Components/Blogs/BlogThirteen';
// // import BlogForteen from './Components/Blogs/BlogForteen';
// // import BlogFifteen from './Components/Blogs/BlogFifteen';
// // import Products from './Pages/Products';
// // import ERPProduct from './Components/Products/ERPProduct';
// // import CloudComputingandBigData from './Components/Blogs/CloudComputingandBigData';

// const App = () => {
//   const location = useLocation();
//   const isBlogPage = location.pathname.startsWith('/blog');
//   const isLoginPage = location.pathname.startsWith('/login')
//   return (
// <div>
//       <div>
//       {/* <Helmet>
//         <title>Your Company Name - Welcome</title>
//         <meta
//           name="description"
//           content="Welcome to SAR Custom Solutions - We provide customized software solutions to elevate your business."
//         />
//         Add more meta tags as needed
//       </Helmet> */}
//          {isBlogPage ? <Navbar/> : isLoginPage ? <Navbar/> : <HomeNav />}
//         <ScrollToTop/>
//         <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/services" element={<Service />} />
//           <Route path="/contactus" element={<Contactus />} />
//           {/* <Route path="/blogs" element={<Blogs />} /> */}
//           <Route path="/blog-products" element={<Product />} />
//           <Route path='/demo' element={<Demo/>} />
//           <Route path="/login" element={<Login />} />

//           {/* blogs  */}
//           {/* <Route path="/blog-erp-implementation" element={<FirstBlog />} />
//           <Route path="/blog-erp-software" element={<SecondBlog />} />
//           <Route path="/blog-impact-in-streamlining-operations" element={<ThirdBlog />} />
//           <Route path="/blog-impact-of-appointment-booking-software-service-business" element={<FourthBlog />} />
//           <Route path="/blog-crm-software-in-customer-retention" element={<FifthBlog />} />
//           <Route path="/blog-crm-software-improving-sales-process" element={<SixthBlog />} />
//           <Route path="/blog-ai-powered-project-management-tools" element={<Seventhblog />} />
//           <Route path="/blog-features-to-look-for-in-project-management-tools" element={<EightBlog />} />
//           <Route path="/blog-role-of-accounting-software-in-financial-planning" element={<NineBlog />} />
//           <Route path="/blog-integrating-accounting-software" element={<Tenblog />} />
//           <Route path="/blog-tricks-to-be-keyboardwizard" element={<KeyboardWizard />} />
//           <Route path="/blog-integrationg-appointment-booking-in-crm" element={<IntegratingAppointmentbooking/>} />
//           /> */}
//           {/* <Route path="/blog-how-cloud-computing-is-revolutionizing-it-infrastructure" element={<BlogThirteen/>} />
//           <Route path="/blog-top-10-benefits-of-cloud-computing-for-small-businesses" element={<BlogForteen/>} />
//           <Route path="/blog-how-cloud-computing-enhances-collaboration-and-productivity" element={<BlogFifteen/>} />
//           <Route path="/blog-13" element={<CloudComputingandBigData/>} /> */} 


//           {/* <Route path="/cards" element={<CardsPage/>} />
//           <Route path="/card1" element={<Card1/>} />
//           <Route path="/card2" element={<Card2/>} />
//           <Route path="/card3" element={<Card3/>} />
          
//           <Route path="/erp-software-service" element={<ErpSoftwareService />} />
//         <Route path="/crm-software-service" element={<CrmSoftwareService />} />
//         <Route path="/accounting-finance-service" element={<AccountingFinanceSoftwareService />} />
//         <Route path="/project-management-service" element={<ProjectManagementToolServices />} />
//         <Route path="/appointment-booking-service" element={<AppointmentBookingSoftwareServices />} />

//         <Route path="/blog-product-erp" element={<ERPProduct/>} /> */}

//         </Routes>
//         <Footer/>
//       </div>
//       <FloatingButtons />
// </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/Scroll/ScrollToTop';
import HomeNav from './Components/Navbar/HomeNav';
import FloatingButtons from './Components/Buttons/FloatingButton';
import Footer from './Components/Footer/Footer';
// Import other necessary components
import Demo from './Pages/Demo';
import Aboutus from './Pages/Aboutus';
import Service from './Pages/Service';
import Contactus from './Pages/Contactus';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';

const AppContent = () => {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');
  const isLoginPage = location.pathname.startsWith('/login');

  return (
    <div>
      {isBlogPage ? <Navbar /> : isLoginPage ? <Navbar /> : <HomeNav />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog-products" element={<Product />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
