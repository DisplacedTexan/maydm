// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then(res => res.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(err => console.error(err));

var input = document.getElementById("pokemonToGet");
input.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    getPokemon();
  }
});

function getPokemon() {
  var pokemon = document.getElementById("pokemonToGet").value;
  var name = document.getElementById("PokemonName");
  var image = document.getElementById("PokemonImage");
  var height = document.getElementById("PokemonHeight");
  var weight = document.getElementById("PokemonWeight");
  var type = document.getElementById("PokemonList");

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    //.then(pokemon => console.log(pokemon))
    .then(pokemon => {
      name.innerHTML = pokemon.name;
      height.innerHTML = pokemon.height;
      weight.innerHTML = pokemon.weight;
      image.src = pokemon.sprites.front_default;
    })
    .catch(err => console.log(err));
}
