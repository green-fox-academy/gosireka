
import { Pokemon } from './Pokemon'


let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function choosePokemon(): string{
  let effective: string = null;
  pokemonOfAsh.forEach(function (pokemon) {
    if (pokemon.isEffectiveAgainst(wildPokemon)) {
      effective = pokemon.name;
    }
  })
  return effective;
}

if (choosePokemon()=== null){
  console.log('There is no effective pokemon');
} else {
  console.log('I choose you, ' + choosePokemon());
}

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}
