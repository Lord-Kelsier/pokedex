export async function parseFetch(url: string) {
  const response = await fetch(url);
  return response.json();
}
