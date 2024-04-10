import { styled } from 'styled-components';

import Colors from '../../../shared/theme';
import PokeInfoGeneralStats from '../PokeInfoGeneralStats';
import PokeInfoBaseStats from '../PokeInfoBaseStats';
import PokeInfoDescription from '../PokeInfoDescription';
import BaseStatsColumn from '../BaseStatsColumn';

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

export const PokeStatsStyled = styled(PokeInfoGeneralStats)`
  background-color: ${Colors.pokeStatsBackground};
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const PokeBaseStatsStyled = styled(PokeInfoBaseStats)`
  background-color: ${Colors.baseStatsBackground};
  height: 300px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
`;

export const PokeDescriptionStyled = styled(PokeInfoDescription)`
  margin: 10px;
  padding: 5px;
  font-size: 130%;
  margin-bottom: 50px;
`;

export const BaseStatsColumnStyled = styled(BaseStatsColumn)`
  width: 70px;
  text-align: center;
`;
