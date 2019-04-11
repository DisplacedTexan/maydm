// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then(res => res.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(err => console.error(err));

function getPokemon() {
  var pokemon = document.getElementById("pokemonToGet").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(pokemon => console.log(pokemon));
}
