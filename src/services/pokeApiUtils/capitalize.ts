export default function capitalize(text: string) {
  const firstLetter = text[0];
  const remainingLetters = text.slice(1);
  const capitalizedName = firstLetter.toLocaleUpperCase() + remainingLetters;
  return capitalizedName;
}
