import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
// import { useEffect } from 'react'
import { useglobalcontext } from './Context'
// import Contact from './Contact'
import Contact from './Contact';
import About from './About';
import Service from './Service';

const Home = () => {

  // const data={
  //   name: "APoorbakajka",
  //   image:"./images/hero.svg"
  // }
  const {updateHomepage}=useglobalcontext();
  useEffect( ()=>updateHomepage(),[]);


  return<> 
  <HeroSection/>;
  <Service/>;
{/* about page isliye nhi krre kyoki useEffect se dono ko update kiya hai isliye same ajayga dono  */}
  <Contact/>;
  
  </>
};

export default Home;
