export function defaultPokeIdParser(pokemonId: number | undefined): string {
  if (pokemonId === undefined) return '0000';
  return ('0000' + pokemonId).slice(-4);
}
