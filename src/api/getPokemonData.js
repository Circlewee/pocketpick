import jsonData from '../data/koreanName.json';

export const getPokemonData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  const data = await response.json();
  return data;
};

export const getDetailData = async url => {
  const response = await fetch(url);
  const data = await response.json();

  const name = jsonData[data.name].name;
  const color = jsonData[data.name].color;
  const img = data.sprites.other['official-artwork'].front_default;

  return { name, img, color };
};
