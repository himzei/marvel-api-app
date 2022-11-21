const BASE_PATH = "https://developer.marvel.com";

export async function charactersList() {
  return await fetch(`${BASE_PATH}/v1/public/characters`).then((response) =>
    response.json()
  );
}
