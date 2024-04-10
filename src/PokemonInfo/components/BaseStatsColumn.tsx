import { styled } from 'styled-components';
import Colors from '../../shared/theme';

interface BaseStatsColumnProps {
  className?: string;
  statName: string;
  statAmount: number;
}

const RowSlab = styled.li<{ key: number; $filled: boolean }>`
  background-color: ${(props) =>
    props.$filled ? Colors.baseStatFilled : Colors.baseStatNotFilled};
  width: 60px;
  height: 8px;
  margin: 5px auto;
`;

const NonDecoratedList = styled.ul`
  list-style-type: none;
  padding: 5px;
`;
export default function BaseStatsColumn({
  className,
  statName,
  statAmount,
}: BaseStatsColumnProps) {
  const getRows = () => {
    const maxStat = 255;
    const statCutOff = 15 * (statAmount / 255);
    const rows = [];
    for (let i = 14; i >= 0; i--) {
      rows.push(<RowSlab key={i} $filled={i < statCutOff} />);
    }
    return rows;
  };
  return (
    <div className={className}>
      <NonDecoratedList>{getRows()}</NonDecoratedList>
      <p>{statName}</p>
    </div>
  );
}
