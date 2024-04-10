import { BaseStatsColumnStyled } from './styled-poke-components/InfoStyles';

type StatDescription = {
  name: string;
  url: string;
};
type StatType = {
  base_stat: number;
  effort: number;
  stat: StatDescription;
};
interface PokeInfoBaseStatsProps {
  className?: string;
  baseStats: Array<StatType> | undefined;
}

export default function PokeInfoBaseStats({
  className,
  baseStats,
}: PokeInfoBaseStatsProps) {
  const stats: Record<string, number> = {
    hp: 0,
    attack: 0,
    defense: 0,
    'special-attack': 0,
    'special-defense': 0,
    speed: 0,
  };
  if (baseStats !== undefined) {
    baseStats.forEach((stat) => {
      stats[stat.stat.name] = stat.base_stat;
    });
  }
  return (
    <div className={className}>
      <BaseStatsColumnStyled statName="HP" statAmount={stats['hp']} />
      <BaseStatsColumnStyled statName="Attack" statAmount={stats['attack']} />
      <BaseStatsColumnStyled statName="Defense" statAmount={stats['defense']} />
      <BaseStatsColumnStyled
        statName="Special Attack"
        statAmount={stats['special-attack']}
      />
      <BaseStatsColumnStyled
        statName="Special Defense"
        statAmount={stats['special-defense']}
      />
      <BaseStatsColumnStyled statName="Speed" statAmount={stats['speed']} />
    </div>
  );
}
