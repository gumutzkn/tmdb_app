export async function fetchFromApi(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed fetching data from ${url} with status ${response.status}: ${response.statusText}`
    );
  }
  return response.json();
}
