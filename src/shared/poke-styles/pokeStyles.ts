import { styled } from 'styled-components';

import Colors from '../theme';

export const PokeId = styled.p<{ weight: string; size: string }>`
  color: ${Colors.idColor};
  font-family: 'Flexo-Bold', arial, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: 5px 0 5px 0;
`;

export const PokeName = styled.p<{ weight: string; size: string }>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: 5px 0 5px 0;
`;

export const PokeImage = styled.img`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;
