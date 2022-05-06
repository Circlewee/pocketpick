import { atom } from 'recoil';

const loadState = atom({
  key: 'loadState',
  default: undefined,
});

export default loadState;
