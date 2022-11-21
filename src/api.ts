const BASE_PATH = "https://gateway.marvel.com:443";
const API_KEY = "1f2be9e5633db8ee3608691d7e342629";

export async function charactersList() {
  return await fetch(
    `${BASE_PATH}/v1/public/characters?orderBy=name&limit=12&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function comicsList() {
  return await fetch(
    `${BASE_PATH}/v1/public/comics?orderBy=focDate&limit=6&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function eventsList() {
  return await fetch(
    `${BASE_PATH}/v1/public/events?orderBy=name&limit=4&apikey=${API_KEY}`
  ).then((response) => response.json());
}
