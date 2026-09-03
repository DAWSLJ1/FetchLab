let limit = 10;
let offset = 0;
const requestURL = "https://pokeapi.co/api/v2/pokemon?limit${limit}&offset${offset}";
async function getData() {
const res = await fetch(url);
console.log(await res);
const data = await res.json();
console.log(data);
}
getData();
