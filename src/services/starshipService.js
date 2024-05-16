const BASE_URL = 'https://swapi.dev/api/starships/';

export async function fetchStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export async function searchStarships(query) {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}