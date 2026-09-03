const requestURL = "https://pokeapi.co/api/v2/pokemon/tapu-koko";
async function getData() {
const res = await fetch(url);
console.log(await res);
const data = await res.json();
console.log(data);
}
getData();
