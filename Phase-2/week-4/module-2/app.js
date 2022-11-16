import { getPokemon } from "./api.js";

//console.log(getPokemon())

const fetchButton = document.querySelector("#get-pokemon");
const pokeListElemt = document.querySelector("#pokemon-list");

fetchButton.addEventListener('click', async function() {
    //call the api to get data
    const pokemonlist = await getPokemon();
    console.log(pokemonlist);

    for(let i=0; i < pokemonlist.length; i++){
        let singlePokemon = pokemonlist[i];
        console.log(singlePokemon);
        const singlePokemonElem = document.createElement('div');
        singlePokemonElem.innerHTML = `<div>${singlePokemon.name} URL: ${singlePokemon.url} </div>`;
        pokeListElemt.appendChild(singlePokemonElem);
    }
})