//VARIABLES

//
let apiBase = "https://pokeapi.co/api/v2/pokemon/";
//michael contains Michael's pokemon
let michael = [];
// Isaac's Trainer
let isaac = [];
//the pokemon that is being displayed
let currentPokemon = 0;
// wrapper for ajax call
function getPokeData(endpoint, done) {
    $.ajax({url: endpoint , success: done});
}

// CLASSES

//construct a trainer

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

let makeTrainer = (arr) => {
 return new Trainer(arr);
}
// POKEMON CONSTRUCTER

function PokemonObj(name, sprite, hp, attack, defense, abilities){
    this.name = name;
    this.sprite = sprite;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
}

// DEPENDANCY

function abilityLoop(abilities){
    let abilityArr = [];
    for(let i = 0; i < abilities.length; i++){
        abilityArr.push(" " + abilities[i].ability.name);
    }
    return abilityArr;
}

// happens on success of the api call

function isaacPokemon(data){
     let pokemon = new PokemonObj(
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilityLoop(data.abilities)
    )
    console.log(`one pokemon '${data.name}' added to hash`);
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

function showPokemon(trainer, key, divId){
    let v = `<p id="sprite" class="pokedata-show"><img src='${trainer[key].sprite}'></p>`;
    let w = `<p class="pokedata-show">HP: ${trainer[key].hp}</p>`;
    let x = `<p class="pokedata-show">ATTACK: ${trainer[key].attack}</p>`;
    let y = `<p class="pokedata-show">DEFENSE: ${trainer[key].defense}</p>`;
    let z = `<p class="pokedata-show">ABILITIES: ${trainer[key].abilities}</p>`;

    if ($('.pokedata-show').length > 1){
        $('.pokedata-show').remove();
        $(`#${divId}`).append([v,w,x,y,z])
    } else {
        $(`#${divId}`).append([v,w,x,y,z]);
    }
}

getPokeData(`${apiBase}6`, isaacPokemon);
getPokeData(`${apiBase}66`, isaacPokemon);
getPokeData(`${apiBase}127`, isaacPokemon);

getPokeData(`${apiBase}68`, michaelPokemon);
getPokeData(`${apiBase}94`, michaelPokemon);
getPokeData(`${apiBase}129`, michaelPokemon);
