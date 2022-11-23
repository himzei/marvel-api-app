const BASE_PATH = "https://gateway.marvel.com:443";

// 개인키
// const API_KEY = "1f2be9e5633db8ee3608691d7e342629";

// 다른사람 키
const API_KEY = "61168dc591cd40d37da9b851a5bc569b";

export async function charactersList() {
  return await fetch(
    `${BASE_PATH}/v1/public/characters?orderBy=name&limit=12&apikey=${API_KEY}`
  ).then((response) => response.json());
}

// 큰 카테고리
export async function charactersData(values: any) {
  const page = values.queryKey[0];
  const LIMIT = values.queryKey[1];
  const OFFSET = (page - 1) * LIMIT;
  return await fetch(
    `${BASE_PATH}/v1/public/characters?orderBy=-modified&offset=${OFFSET}&limit=${LIMIT}&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function characterDetail(values: any) {
  const CHARACTER_ID = values.queryKey[0];
  return await fetch(
    `${BASE_PATH}/v1/public/characters/${CHARACTER_ID}?apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function comicsList(values: any) {
  const page = values.queryKey[0];
  const LIMIT = values.queryKey[1];
  const OFFSET = (page - 1) * LIMIT;
  return await fetch(
    `${BASE_PATH}/v1/public/comics?orderBy=focDate&&offset=${OFFSET}&limit=${LIMIT}&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function eventsList() {
  return await fetch(
    `${BASE_PATH}/v1/public/events?orderBy=name&limit=16&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function seriesList() {
  return await fetch(
    `${BASE_PATH}/v1/public/series?contains=comic%2Cmagazine%2Ctrade%20paperback%2Chardcover%2Cdigest%2Cgraphic%20novel%2Cdigital%20comic%2Cinfinite%20comic&orderBy=title&limit=6&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function detail(id: any) {
  const comicId = id.queryKey[1];
  return await fetch(
    `${BASE_PATH}/v1/public/comics/${comicId}?apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function detailCharacters(id: any) {
  const comicId = id.queryKey[1];
  console.log(comicId);
  return await fetch(
    `${BASE_PATH}/v1/public/comics/${comicId}/characters?apikey=${API_KEY}`
  ).then((response) => response.json());
}
