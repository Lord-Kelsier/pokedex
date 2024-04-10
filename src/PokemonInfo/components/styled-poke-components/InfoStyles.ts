import { styled } from 'styled-components';

import Colors from '../../../shared/theme';

export const HeaderContainer = styled.header`
  background-color: black;
  height: 50px;
  padding-top: 50px;
`;

export const PokeName = styled.p`
  background-color: white;
  font-weight: 500;
  font-size: 150%;
  margin: 5px 0 5px 0;
`;

export const PokeId = styled.p`
  color: ${Colors.idColor};
  font-family: arial, sans-serif;
  font-size: 80%;
  font-weight: bold;
  margin: 5px 0 5px 0;
  font-weight: bold;
  font-size: 150%;
`;

export const TitleContainer = styled.section`
  background-color: white;
  width: 70%;
  height: 50px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: baseline;
  gap: 2%;
`;
