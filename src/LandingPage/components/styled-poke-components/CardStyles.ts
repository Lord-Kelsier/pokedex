import styled, { keyframes } from 'styled-components';

import getBackgroundColor from './pokeTypesColor';

const jumpAnimation = keyframes`
 0% { transform: translateY(0); }
 50% { transform: translateY(-4px); }
 100% { transform: translateY(0); }
`;
export const CardBox = styled.article`
  width: 200px;
  height: 300px;
  padding: 0 5px 50px 5px;
  cursor: pointer;
  &: hover {
    animation-name: ${jumpAnimation};
    animation-duration: 0.2s;
  }
`;

export const PokeImage = styled.img`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const PokeId = styled.p`
  color: #919191;
  font-family: 'Flexo-Bold', arial, sans-serif;
  font-size: 80%;
  font-weight: bold;
  margin: 5px 0 5px 0;
`;

export const PokeName = styled.p`
  font-weight: 500;
  font-size: 150%;
  margin: 5px 0 5px 0;
`;

export const PokeTypeContainer = styled.ul`
  display: flex;
  gap: 5px;
  padding: 5px;
  flex-wrap: wrap;
`;
export const PokeType = styled.li<{ type: string }>`
  background-color: ${(props) => getBackgroundColor(props.type)};
  list-style-type: none;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  font-size: 80%;
  text-align: center;
  width: 50px;
`;
