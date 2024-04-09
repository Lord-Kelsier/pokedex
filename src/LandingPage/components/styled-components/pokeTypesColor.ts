const ColorMapping: Record<string, string> = {
  normal: '#8a857b',
  poison: '#4a1f63',
  psychic: '#d934ce',
  grass: '#3db32b',
  ground: '#b3a32b',
  ice: '#12d9e3',
  fire: '#ad1732',
  rock: '#bd8c42',
  dragon: '#8702e6',
  water: '#0e98cf',
  bug: '#9cb329',
  dark: '#593300',
  fighting: '#591602',
  ghost: '#220259',
  steel: '#858585',
  flying: '#256080',
  electric: '#ffef40',
  fairy: '#ffa6fc',
};

export default function getBackgroundColor(type: string): string {
  return ColorMapping[type];
}
