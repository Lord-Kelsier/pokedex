import styled from 'styled-components';
import getBackgroundColor from './pokeTypesColor';

export const CardBox = styled.article`
  width: 270px;
  height: 370px;
  padding: 0 5px 50px 5px;
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
  width: 73px;
`;

export const PokeContainer = styled.ul`
  margin: 0 auto;
  width: 840px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: #fff;
`;
