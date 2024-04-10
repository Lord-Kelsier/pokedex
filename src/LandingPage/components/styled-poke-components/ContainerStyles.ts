import styled from 'styled-components';

import Colors from '../../../shared/theme';

export const PokeContainer = styled.ul`
  margin: 0 auto;
  width: 840px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: #fff;
  justify-content: center;
`;

export const ButtonLoadMore = styled.button`
  background-color: ${Colors.blueButton};
  font-size: 1.5rem;
  width: 40%;
  height: 70px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  &: hover {
    background-color: ${Colors.blueButtonHover};
  }
  &: active {
    transform: translateY(4px);
  }
`;

export const LandingHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;

export const CardsSection = styled.section`
  background: #fff url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
`;
