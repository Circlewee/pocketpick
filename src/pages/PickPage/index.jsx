import { ResultBox } from './components';
import { Container } from './style';
import { RecoilRoot } from 'recoil';

export const PickPage = () => {
  return (
    <Container>
      <RecoilRoot>
        <ResultBox />
      </RecoilRoot>
    </Container>
  );
};
