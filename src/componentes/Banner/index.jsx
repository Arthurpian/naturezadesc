import React, { useState } from 'react';
import banner from '../../img/banner.jpg';
import banner1 from '../../img/banner1.jpg';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 250px;
  width: 95%;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 50px;
`;

const Slides = styled.div`
  display: flex;
  width: 500%; /* 5 img / 100 % = 500% */
  height: 100%;
  transform: translateX(${(props) => props.translateValue}%);
  transition: transform 0.6s ease-in-out;
`;

const Slide = styled.div`
  width: 20%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Bar = styled.label`
  width: 70px;
  height: 17px;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 6px;
  transition: 0.4s;

  &:hover {
    background-color: #fff;
  }
`;

const Input = styled.input`
  display: none;
`;

function Banner() {
  const [translateValue, setTranslateValue] = useState(0);

  const handleSlideChange = (e) => {
    const selectedSlide = parseInt(e.target.id.replace('slide', ''), 10);
    const newTranslateValue = (selectedSlide - 1) * -20;
    setTranslateValue(newTranslateValue);
    
  };

  return (
    <Container>
      <Slides translateValue={translateValue}>
        <Slide>
          <SlideImage src={banner} alt="slide1" />
        </Slide>
        <Slide>
          <SlideImage src={banner1} alt="slide2" />
        </Slide>
        <Slide>
          <SlideImage src={banner} alt="slide3" />
        </Slide>
        <Slide>
          <SlideImage src={banner1} alt="slide4" />
        </Slide>
      </Slides>

      <Navigation>
        <Input type="radio" name="slide" id="slide1" onChange={handleSlideChange} />
        <Input type="radio" name="slide" id="slide2" onChange={handleSlideChange} />
        <Input type="radio" name="slide" id="slide3" onChange={handleSlideChange} />
        <Input type="radio" name="slide" id="slide4" onChange={handleSlideChange} />

        <Bar htmlFor="slide1" />
        <Bar htmlFor="slide2" />
        <Bar htmlFor="slide3" />
        <Bar htmlFor="slide4" />
      </Navigation>
    </Container>
  );
}

export default Banner;
