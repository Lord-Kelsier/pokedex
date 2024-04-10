interface PokeInfoGeneralStatsProps {
  weight: number;
  height: number;
}
export default function PokeInfoGeneralStats({
  weight,
  height,
}: PokeInfoGeneralStatsProps) {
  return (
    <>
      <p>{weight}</p>
      <p>{height}</p>
    </>
  );
}
