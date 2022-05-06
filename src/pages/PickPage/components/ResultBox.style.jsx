import styled, { keyframes } from 'styled-components';

const btnAnimate = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  10% {
    transform: rotate(8deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-10deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-8deg);
  }
  90% {
    transform: rotate(8deg);
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: 700px;
  }

  button {
    width: 400px;
    height: 80px;
    font-size: 45px;
    border: 3px solid red;
    border-radius: 75px;
    background-color: white;
    animation: ${btnAnimate} 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both 3;
    transition: all 0.3s linear, color 0.3s linear;
  }

  button:hover {
    background-color: red;
    color: white;
    animation: none;
  }

  h1 {
    font-size: 55px;
  }
`;
