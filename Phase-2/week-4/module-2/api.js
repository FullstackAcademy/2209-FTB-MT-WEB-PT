export const getPokemon = async() => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    console.log(response);

    const data = await response.json();
    console.log(data.results)
    return data , data.results
}