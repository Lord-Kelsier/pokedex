import { useParams } from 'react-router-dom';

export default function PokemonInfo() {
  const { pokeName } = useParams();
  return (
    <>
      <h1>This is a pokemon info page</h1>;<h2>Pokemon: {pokeName}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum deleniti in optio,
        eos asperiores aut? Tempora repellat commodi pariatur illo.
      </p>
    </>
  );
}
