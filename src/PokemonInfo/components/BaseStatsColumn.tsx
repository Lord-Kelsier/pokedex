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
  return (
    <div className={className}>
      <p>{statAmount}</p>
      <p>{statName}</p>
    </div>
  );
}
