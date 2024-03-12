import React  from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';
import { useglobalcontext } from '../Context'
// const HeroSection = ({name,image}) => {
  // const firstName=useglobalcontext();
  const HeroSection=()=>{
  const {name,image}=useglobalcontext();
  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className='hero-top-data'>This is me</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>
                    kfdfdmf {name} ffmd fdkd fdfmdk dfkfmd
                    kdnd  dsdkd sdsd sdisadpwoifmd  fdofdfkd
                </p>
                <Button className='btn hireme-btn'>
                <NavLink to='/contact'>contact me</NavLink>
            </Button>
            </div>
            
            <div className="section-hero-image">
                <img src={image} alt="" className='hero-img' />
            </div>
        </div>
    </Wrapper>
  );
}
const Wrapper=styled.section`
padding: 9rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-transform: uppercase;
  font-size: 6.4rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 80%;
}
`;
export default HeroSection
