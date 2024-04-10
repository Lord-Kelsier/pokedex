import { styled } from 'styled-components';

import Colors from '../../../shared/theme';
import PokeInfoGeneralStats from '../PokeInfoGeneralStats';

export const HeaderContainer = styled.header`
  background-color: black;
  height: 50px;
  padding-top: 50px;
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

export const PokeInfoSection = styled.section`
  background: #fff url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
`;

export const PokeInfoContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: white;
  padding: 10px;
  display: flex;
`;

export const PokeImageBaseStatsSection = styled.section`
  flex-grow: 1;
  flex-basis: 0;
`;

export const PokeStatsSection = styled.section`
  flex-grow: 1;
  flex-basis: 0;
`;

export const BaseStats = styled.article`
  background-color: ${Colors.baseStatsBackground};
  height: 300px;
  border-radius: 5px;
`;

export const PokeStatsStyled = styled(PokeInfoGeneralStats)`
  background-color: ${Colors.pokeStatsBackground};
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  height: 300px;
`;
