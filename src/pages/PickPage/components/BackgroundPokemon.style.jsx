import styled, { keyframes, css } from 'styled-components';

const backgroundPokemon = keyframes`
  to {
    transform: translateY(900px) rotate(360deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: ${({ staticPos }) => staticPos.y}px;
  left: ${({ staticPos }) => staticPos.x}px;
  width: 70px;
  height: 70px;
  animation: ${({ animateTime }) =>
    css`
      ${backgroundPokemon} ${animateTime}s infinite linear 0.3s
    `};
  z-index: -1;
`;

export const BackgroundPoke = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;
