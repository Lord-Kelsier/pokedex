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
  const defaultStats: Record<string, number> = {
    hp: 0,
    attack: 0,
    defense: 0,
    'special-attack': 0,
    'special-defense': 0,
    speed: 0,
  };
  if (baseStats !== undefined) {
    baseStats.forEach((stat) => {
      defaultStats[stat.stat.name] = stat.base_stat;
    });
  }
  return (
    <div className={className}>
      <h1>BaseStats</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
