export default function capitalize(text: string) {
  if (text === undefined || text === null || text === '') return '';
  const firstLetter = text[0];
  const remainingLetters = text.slice(1);
  const capitalizedName = firstLetter.toLocaleUpperCase() + remainingLetters;
  return capitalizedName;
}
