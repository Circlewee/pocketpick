import { Container } from './ResultBox.style';
import { getPokemonData, getDetailData } from '../../../api/getPokemonData';
import { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { BackgroundPokemon } from './BackgroundPokemon';
import { useRecoilState } from 'recoil';
import pickPokemonState from '../../state/pickPokemonState';
import loadState from '../../state/loadState';

export const ResultBox = () => {
  const [data, setData] = useState();
  const [pickedPoke, setPickedPoke] = useRecoilState(pickPokemonState);
  const [loading, setLoading] = useRecoilState(loadState);

  useEffect(() => {
    getPokemonData().then(data => {
      setData(data);
    });
  }, []);

  async function randomPick() {
    const id = Math.floor(Math.random() * 150);
    const url = data.results[id].url;
    const detailData = await getDetailData(url);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    setPickedPoke({ ...detailData, id: id + 1 });
  }

  function makeBackgroundPokemon() {
    return Array.from({ length: 15 }).map(() => <BackgroundPokemon img={pickedPoke.img} />);
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="info">
            {pickedPoke.name === undefined ? (
              <h1>버튼을 눌러보세요!</h1>
            ) : (
              <>
                <img src={pickedPoke.img} alt="" />
                <h1>
                  No.{pickedPoke.id} {pickedPoke.name}
                </h1>
              </>
            )}
          </section>
          <button onClick={randomPick}>Pick your Poke</button>
          {makeBackgroundPokemon()}
        </>
      )}
    </Container>
  );
};
