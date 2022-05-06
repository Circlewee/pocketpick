import styled, { keyframes } from 'styled-components';
import Ball from '../../../img/ball.png';

const load = keyframes`
  0%{
  	transform: rotate(0deg);
    opacity: 1;
  }
  10%{
  	transform: rotate(45deg);
  }
  20%{
  	transform: rotate(-45deg);
  }
  30%{
  	transform: rotate(30deg);
  }
  40%{
  	transform: rotate(-30deg);
  }
  50%{
  	transform: rotate(10deg);
    opacity: 0.5;
  }
  60%{
  	transform: rotate(-10deg);
  }
  70%{
  	transform: rotate(0deg);
  }
  100%{
  	transform: rotate(0deg);
    opacity: 1;
  }
`;

export const Container = styled.section`
  border-radius: 50%;
`;

export const Animation = styled.section`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: url(${Ball}) center/100% no-repeat;
  background-color: transparent;
  box-shadow: 0 0 60px 35px ${({ shadowColor }) => shadowColor};
  animation: ${load} 1.68s infinite;
`;
