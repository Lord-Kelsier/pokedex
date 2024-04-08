// import './App.css';

import React from 'react';
import styled from 'styled-components';

import { CardsContainer } from './components/CardStyles';
import PokeCard from './components/PokeCard';

const BigEmptyBlock = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

const CardsSection = styled.section`
  justify-content: center;
  background: #fff url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
`;

function LandingPage() {
  return (
    <div className="landing-page">
      <BigEmptyBlock />
      <CardsSection>
        <CardsContainer>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
        </CardsContainer>
      </CardsSection>
    </div>
  );
}

export default LandingPage;
