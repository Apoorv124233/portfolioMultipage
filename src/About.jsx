// import React from 'react'
// import { useEffect } from 'react';
// import HeroSection from './Components/HeroSection'
// import { useglobalcontext } from './Context'

// const About = () => {

//   // const data={
//   //   name: "APoorbakajka",
//   //   image:"./images/hero.svg"
//   // }
//   const {updateAboutpage}=useglobalcontext();
//   useEffect( ()=>updateAboutpage(),[]);


//   return <HeroSection />;
// };

// export default About;
import React, { useEffect } from "react";
import HeroSection from './Components/HeroSection'
import { useglobalcontext } from './Context'

const About = () => {
  const { updateAboutpage } = useglobalcontext();

  useEffect(() => updateAboutpage(), []);

  return <HeroSection />;
};

export default About;
