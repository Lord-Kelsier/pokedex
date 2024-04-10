import styled, { keyframes } from 'styled-components';

import getBackgroundColor from '../../../services/pokeApiUtils/pokeTypesColor';
import Colors from '../../../shared/theme';

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
