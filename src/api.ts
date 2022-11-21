const BASE_PATH = "https://gateway.marvel.com:443";
const API_KEY = "1f2be9e5633db8ee3608691d7e342629";

export async function charactersList() {
  return await fetch(
    `${BASE_PATH}/v1/public/characters?orderBy=name&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function comicsList() {
  return await fetch(
    `${BASE_PATH}/v1/public/comics?orderBy=focDate&apikey=${API_KEY}`
  ).then((response) => response.json());
}
