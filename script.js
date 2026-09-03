async function pokemon() {
  const requestURL =
    "https://pokeapi.co/api/v2/pokemon/tapu-koko";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(pokemon);
  populateHeroes(pokemon);
}
