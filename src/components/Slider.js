import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = () => {
  const [percentage, setPercentage] = useState(1);

  const handlePercentage = (e) => {
    setPercentage(e.target.value);
  };

  const makeSlide = () => {
    const slides = [];
    for (let i = 1; i <= 100; i++) {
      slides.push(
        <Slide
          key={`${i}`}
          id={`${i}`}
          onClick={() => setPercentage(i)}
          percentage={percentage}
        />
      );
    }
    return slides;
  };

  return (
    <Container>
      <Range>
        <RangeNumber>{percentage}</RangeNumber>%
      </Range>
      <SlideWrapper>
        {makeSlide()}
        <RangeInput
          type='range'
          min={1}
          max={100}
          value={percentage}
          onChange={handlePercentage}
        />
      </SlideWrapper>
      <ButtonWrapper>
        {[1, 25, 50, 75, 100].map((num) => {
          return <Button onClick={() => setPercentage(num)}>{num}%</Button>;
        })}
      </ButtonWrapper>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 180px;
  border: 1px solid lightgray;
  margin: 0px 0px 50px 20px;
`;

const Range = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 600px;
  height: 50px;
  padding-right: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const RangeNumber = styled.span`
  margin-right: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SlideWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 20px;
`;

const Slide = styled.div`
  width: 6px;
  height: ${({ id }) =>
    id === '1' || id === '25' || id === '50' || id === '75' || id === '100'
      ? '20px'
      : '10px'};
  background-color: ${({ id, percentage }) =>
    Number(id) <= percentage ? '#10aeaf' : 'gray'};
`;

const RangeInput = styled.input`
  position: absolute;
  width: 600px;
  height: 10px;
  margin: 0px;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #10aeaf;
    cursor: pointer;
    height: 30px;
    width: 15px;
    border-radius: 10%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  margin: 0px 50px;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: gray;
  font-size: 0.8rem;
  cursor: pointer;
`;
