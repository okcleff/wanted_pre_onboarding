import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [selection, setSelection] = useState('default');

  return (
    <Container>
      <SelectedBG selection={selection} />
      <Button
        selection={selection}
        onClick={() => setSelection('default')}
        name='default'
      >
        기본
      </Button>
      <Button
        selection={selection}
        onClick={() => setSelection('detail')}
        name='detail'
      >
        상세
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  margin-bottom: 50px;
  background-color: lightgray;
  border-radius: 100px;
  z-index: 0;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 80px;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ selection, name }) => (selection === name ? 'black' : 'gray')};
  z-index: 9999;
  cursor: pointer;
`;

const SelectedBG = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 380px;
  height: 60px;
  border-radius: 100px;
  background-color: white;
  transform: translateX(
    ${({ selection }) => (selection === 'default' ? '0%' : '100%')}
  );
  transition: transform ease 0.3s;
  z-index: 1;
`;

export default Toggle;
