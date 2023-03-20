//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
// import HeroSection from "../Sections/Hero/index";
import HeroSection from '../Sections/HeroSection/index';
import React, { useState } from 'react';
// import Summary from '../Sections/Summary/index';
import InfoSection from '../Sections/InfoSection/index';
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import WhatWeDo from "../Sections/WhatWeDo/index";
import Welcome from "../Sections/Welcome/index";
import styled from "styled-components";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../Sections/InfoSection/Data';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />     
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      
      {/* <Summary/> */}
      {/* <HeroSection /> */}
      {/* <About /> */}
      <Services />
      {/* <Welcome /> */}
      
      <WhatWeDo/>
      {/* <Testimonials /> */}
      <Contact />
    </Container>
  );
};

export default Home;
