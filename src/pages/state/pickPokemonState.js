import { atom } from 'recoil';
import Ball from '../../img/ball.png';

const pickPokemonState = atom({
  key: 'pickPokemonState',
  default: { id: 0, name: undefined, img: Ball },
});

export default pickPokemonState;
