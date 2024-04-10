export function defaultPokeIdParser(pokemonId: number): string {
  return ('0000' + pokemonId).slice(-4);
}
