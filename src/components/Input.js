import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiFillCheckCircle,
  AiFillEyeInvisible,
  AiFillEye,
} from 'react-icons/ai';

const Input = () => {
  const [isValid, setIsValid] = useState(false);
  const [inputType, setInputType] = useState('password');

  const checkEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    const validation = emailRegex.test(e.target.value);
    return validation ? setIsValid(true) : setIsValid(false);
  };

  const handlevisibility = () => {
    return inputType === 'password'
      ? setInputType('text')
      : setInputType('password');
  };

  return (
    <Container>
      <Label>
        E-mail
        <br />
        <Inputs placeholder='E-mail' type='email' onChange={checkEmail} />
        <CheckCircle isValid={isValid} />
      </Label>
      <Label>
        Password
        <br />
        <Inputs placeholder='Password' type={inputType} />
        {inputType === 'password' ? (
          <Invisible onClick={handlevisibility} />
        ) : (
          <Visible onClick={handlevisibility} />
        )}
      </Label>
    </Container>
  );
};

export default Input;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  margin-bottom: 50px;
  background-color: #f7f7f7;
`;

const Label = styled.label`
  position: relative;
  margin: 20px 0px;
  font-size: 0.8rem;
`;

const Inputs = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  :focus {
    outline-color: black;
  }
`;

const CheckCircle = styled(AiFillCheckCircle)`
  position: absolute;
  right: 10px;
  top: 25px;
  color: ${({ isValid }) => (isValid ? '#10aeaf' : 'gray')};
  font-size: 1.5rem;
`;

const Visible = styled(AiFillEye)`
  position: absolute;
  right: 10px;
  top: 25px;
  color: #10aeaf;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Invisible = styled(AiFillEyeInvisible)`
  position: absolute;
  right: 10px;
  top: 25px;
  color: gray;
  font-size: 1.5rem;
  cursor: pointer;
`;
