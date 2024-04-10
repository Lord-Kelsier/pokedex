import { styled } from 'styled-components';
import Colors from '../../shared/theme';
import {
  RowSlab,
  StatNameText,
  NonDecoratedList,
} from './styled-poke-components/InfoStyles';

interface BaseStatsColumnProps {
  className?: string;
  statName: string;
  statAmount: number;
}

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
      <StatNameText>{statName}</StatNameText>
    </div>
  );
}
