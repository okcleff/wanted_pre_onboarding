import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const [isSelected, setIsSelected] = useState('감자');
  const categories = ['감자', '고구마', '카레라이스'];

  const makeButtons = () => {
    const buttons = categories.map((category) => (
      <Button
        key={category}
        isSelected={isSelected}
        onClick={() => setIsSelected(category)}
        name={category}
      >
        {category}
      </Button>
    ));
    return buttons;
  };

  return (
    <Container>
      <Underline isSelected={isSelected} />
      {makeButtons()}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 900px;
  margin-bottom: 50px;
  border-bottom: 4px solid lightgray;
  z-index: 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ isSelected, name }) => (isSelected === name ? 'black' : 'gray')};
  z-index: 9999;
  cursor: pointer;
`;

const Underline = styled.div`
  position: absolute;
  top: 80px;
  width: 300px;
  height: 4px;
  border-radius: 100px;
  background-color: #10aeaf;
  transform: translateX(
    ${({ isSelected }) => {
      if (isSelected === '감자') {
        return '0%';
      } else if (isSelected === '고구마') {
        return '100%';
      } else {
        return '200%';
      }
    }}
  );
  transition: transform ease 0.4s;
  z-index: 1;
`;

export default Tab;
