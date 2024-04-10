import { styled } from 'styled-components';

import Colors from '../../../shared/theme';
import BaseStatsColumn from '../BaseStatsColumn';
import PokeInfoBaseStats from '../PokeInfoBaseStats';
import PokeInfoDescription from '../PokeInfoDescription';
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
  justify-content: center;
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
  margin: 0;
`;

export const BackToPokedexBtn = styled.button`
  background-color: orange;
  border: none;
  margin: 30px 15px;
  padding: 20px;
  font-size: 130%;
  font-weight: bold;
  border-radius: 5px;
`;

export const RowSlab = styled.li<{ key: number; $filled: boolean }>`
  background-color: ${(props) =>
    props.$filled ? Colors.baseStatFilled : Colors.baseStatNotFilled};
  width: 60px;
  height: 8px;
  margin: 5px auto;
`;

export const NonDecoratedList = styled.ul`
  list-style-type: none;
  padding: 5px;
  margin-bottom: 0;
`;

export const StatNameText = styled.p`
  display: inline-block;
`;

export const StatSpan = styled.span`
  color: white;
  font-weight: 500;
  & :last-child {
    color: black;
    font-size: 120%;
  }
`;
