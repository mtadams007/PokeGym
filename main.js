
let apiBase = "https://pokeapi.co/api/v2/pokemon/";

// pokemon objects get stored here until they are passed into trainerClass
let michael = [];
let isaac = [];

// These are empty objects that will later become trainer objects (via the trainer class)
let michaelLeader = {};
let isaacLeader = {};

// this variable is incremented as we cycle through the pokemon
// cannot be less then 0 or greater than 2 (since there are only 3 pokemon per trainer)
let currentPokemon = 0;

// wrapper for ajax call
function getPokeData(endpoint, done) {
    $.ajax({url: endpoint , success: done});
}

// TRAINER CLASS
// is passed an array of pokemon which then stores it inside of a trainer object (pre-defined above)
class Trainer {
 constructor(arr) {
   let i = 0;
   while (i<arr.length) {
     this[i] = arr[i];
     i++;
   }
 }
 all() {
   let soldiers = [];
   let x;
   for (x in this) {
     soldiers.push(this[x]);
   }
   return soldiers;
 }
 get(name){
   let x;
   for (x in this) {
     if (name === this[x].name){
       return this[x];
     }
   }
 }
}

// trainer constructor
let makeTrainer = (arr) => {
 return new Trainer(arr);
}

//POKEMON CLASS
function PokemonObj(name, sprite, hp, attack, defense, abilities){
    this.name = name;
    this.sprite = sprite;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
}

// Function that loops through data.abilities and returns an array of strings rather than an array of objects.
function abilityLoop(abilities){
    let abilityArr = [];
    for(let i = 0; i < abilities.length; i++){
        abilityArr.push(" " + abilities[i].ability.name);
    }
    return abilityArr;
}

// Constructor functions
// push's each pokemon object into a temporary array
function isaacPokemon(data){
     let pokemon = new PokemonObj(
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilityLoop(data.abilities)
    )
    console.log(`one pokemon '${data.name}' added to 'isaac'`);
    isaac.push(pokemon);
};

function michaelPokemon(data){
     let pokemon = new PokemonObj(
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilityLoop(data.abilities)
    )
    console.log(`one pokemon '${data.name}' added to hash`);
    michael.push(pokemon);
};

// Appends pokemon data into the trainers corresponding section.
// DOM MANIPULATION
function showPokemon(trainer, key, divId){
    let u = `<h3 class="pokedata-show">${trainer[key].name}</h3>`
    let v = `<p id="sprite" class='pokedata-show'><img src='${trainer[key].sprite}'></p>`;
    let w = `<p class='pokedata-show'>HP: ${trainer[key].hp}</p>`;
    let x = `<p class='pokedata-show'>ATTACK: ${trainer[key].attack}</p>`;
    let y = `<p class='pokedata-show'>DEFENSE: ${trainer[key].defense}</p>`;
    let z = `<p class='pokedata-show'>ABILITIES: ${trainer[key].abilities}</p>`;

    if ($('.pokedata-show').length > 1){
        $('.pokedata-show').remove();
    }

    $(`#${divId}`).append([v,u,w,x,y,z]);

}

// EVENT LISTENERS

$('#michael-left').click(function(){
    if(currentPokemon == 0){
        currentPokemon = 2;
    } else {
    currentPokemon -= 1;
    }
    showPokemon(michaelLeader, currentPokemon, 'michaelTrainer');
})

$('#michael-right').click(function(){
   if(currentPokemon == 2){
        currentPokemon = 0;
    } else {
    currentPokemon += 1;
    }
    showPokemon(michaelLeader, currentPokemon, 'michaelTrainer');
})

$('#isaac-left').click(function(){
    if(currentPokemon == 0){
        currentPokemon = 2;
    } else {
    currentPokemon -= 1;
    }
    showPokemon(isaacLeader, currentPokemon, 'isaacTrainer');
})

$('#isaac-right').click(function(){
   if(currentPokemon == 2){
        currentPokemon = 0;
    } else {
    currentPokemon += 1;
    }
    showPokemon(isaacLeader, currentPokemon, 'isaacTrainer');
})

$('#michael-on').click(function(powerOn){
    currentPokemon = 0;
    michaelLeader = makeTrainer(michael);
    showPokemon(michaelLeader, currentPokemon, 'michaelTrainer');
  });

$('#isaac-on').click(function(powerOn){
    currentPokemon = 0;
    isaacLeader = makeTrainer(isaac);
    showPokemon(isaacLeader, currentPokemon, 'isaacTrainer');
  });

// AJAX CALLS

getPokeData(`${apiBase}6`, isaacPokemon);
getPokeData(`${apiBase}66`, isaacPokemon);
getPokeData(`${apiBase}127`, isaacPokemon);

getPokeData(`${apiBase}68`, michaelPokemon);
getPokeData(`${apiBase}94`, michaelPokemon);
getPokeData(`${apiBase}magikarp`, michaelPokemon);

