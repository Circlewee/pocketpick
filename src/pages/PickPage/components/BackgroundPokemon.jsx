import { Container, BackgroundPoke } from './BackgroundPokemon.style';
import pickPokemonState from '../../state/pickPokemonState';
import { useRecoilValue } from 'recoil';
import loadState from '../../state/loadState';

export const BackgroundPokemon = () => {
  const pickedPoke = useRecoilValue(pickPokemonState);
  const loading = useRecoilValue(loadState);

  function getRandomPos() {
    return { x: Math.random() * 1900, y: Math.random() * 5 };
  }

  function getRandomTime() {
    return Math.random() * 4 + 1;
  }

  return (
    <Container staticPos={getRandomPos()} animateTime={getRandomTime()}>
      {loading !== true ? <BackgroundPoke src={pickedPoke.img} /> : <></>}
    </Container>
  );
};
