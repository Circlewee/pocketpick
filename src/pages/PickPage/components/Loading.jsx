import { Container, Animation } from './Loading.style';
import pickPokemonState from '../../state/pickPokemonState';
import { useRecoilValue } from 'recoil';

export const Loading = () => {
  const pickedPoke = useRecoilValue(pickPokemonState);

  return (
    <Container>
      <Animation shadowColor={pickedPoke.color} />
    </Container>
  );
};
