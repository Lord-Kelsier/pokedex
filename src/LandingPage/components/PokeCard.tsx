import { CardBox } from './CardStyles';

interface PokeCardArguments {
  id: number;
  name: string;
  imgUrl: string;
  types: Array<string>;
}
function PokeCard({ id, name, imgUrl, types }: PokeCardArguments) {
  return (
    <>
      <CardBox>A</CardBox>
      {[id, name, imgUrl, types]}
    </>
  );
}

export default PokeCard;
