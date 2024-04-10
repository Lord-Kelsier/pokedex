import styled from 'styled-components';

import CardsContainer from './components/CardsContainer';

const BigEmptyBlock = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

const CardsSection = styled.section`
  background: #fff url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
`;

function LandingPage() {
  return (
    <div className="landing-page">
      <BigEmptyBlock />
      <CardsSection>
        <CardsContainer />
      </CardsSection>
    </div>
  );
}

export default LandingPage;
