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
//class Trainer {
//  constructor(arr) {
//    let i = 0;
//    while (i<arr.length) {
//      this[i] = arr[i];
//      i++;
//    }
//  }
//  all() {
//    let soldiers = [];
//    let x;
//    for (x in this) {
//      soldiers.push(this[x]);
//    }
//    return soldiers;
//  }
//  get(name){
//    let x;
//    for (x in this) {
//      if (name === this[x].name){
//        return this[x];
//      }
//    }
//  }
//}
//
//let makeTrainer = (arr) => {
//  //first sort the pokemon by id number
//  sortFriends(arr);
//  return new Trainer(arr);
//}

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

getPokeData(`${apiBase}6`, isaacPokemon);
getPokeData(`${apiBase}66`, isaacPokemon);
getPokeData(`${apiBase}127`, isaacPokemon);

getPokeData(`${apiBase}68`, michaelPokemon);
getPokeData(`${apiBase}94`, michaelPokemon);
getPokeData(`${apiBase}129`, michaelPokemon);


// CODE I MIGHT WANT TO KEEP AND TWEAK

//changes pokemon backwards
// $('#previous').click(function(e) {
//   //If we're in danger of having the currentPokemon being negative, we start at the last pokemon
//   if (currentPokemon === 0) {
//     currentPokemon = army.length - 1;
//   } else {
//     currentPokemon--;
//   }
//   if (count(colonel)>1) {
//   changePokemon();
//   }
// })


//changes pokemon forwards
// $('#next').click(function(e) {
//   currentPokemon++;
//   if (count(colonel)>1) {
//   changePokemon();
//   }
// })

//how to change pokemon
// let changePokemon = () => {
//   $('#leftScreen').html('');
//   $('#rightScreen').html('');
//   let p = whichPokemon(colonel);
//   $('#leftScreen').prepend(`<img src='${colonel[p].frontPic}' id='pic'>`);
//   $('#leftScreen').append(`<h2 id='pokeName'>No ${colonel[p].number}:  ${colonel[p].name}</h2>`);
//   displayStats(colonel[p]);
//   isFront = true;
// }

// if (isOff) {
//   makeTrainer();
//   changePokemon();
// } else {
//   colonel = {};
//   $('#leftScreen').html('');
//   $('#rightScreen').html('');
//   currentPokemon = 0;
// }
// isOff = !isOff;
// })

//MOST LIKELY NOT GOING TO USE

//Lets me know how many pokemon I have
// let count = (obj) => {
  // return Object.keys(obj).length;
// }

//construct a pokemon
// class Pokemon {
//   constructor(arr){
//     this.name = arr[0];
//     this.number = arr[1];
//     this.frontPic = arr[2];
//     this.backPic = arr[3];
//     this.hp = arr[4];
//     this.attack = arr[5];
//     this.defense = arr[6];
//     this.specialAttack = arr[7];
//     this.specialDefense = arr[8];
//     this.speed = arr[9];
//     this.abilities = arr[10];
//     this.type = arr[11];
//   }
// }

//AJAX FUNCTION

//to add New pokemon to an existing Trainer

// let addPoke = (num) => {
//   return $.ajax({
//       url: `https://pokeapi.co/api/v2/pokemon/${num}`,
//       type: 'GET',
//       success: function(data) {
//         pokeArray = [data.name, data.id, data.sprites.front_default, data.sprites.back_default, data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat,  data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat, data.abilities, data.types];
//         console.log('heya');
//         //creates new pokemon and pushes to the army
//         friend = new Pokemon(pokeArray);
//         army.push(friend);
//       }
//   })
// }

//creates one pokemon through ajax
// let createPoke = (num) => {
//   army = [];
//   addPoke(num);
// }


//BUTTON RULES

// LEFT ARRAY OF buttons

//changes pokemon backwards
// $('#previous').click(function(e) {
  //If we're in danger of having the currentPokemon being negative, we start at the last pokemon
  // if (currentPokemon === 0) {
  //   currentPokemon = army.length - 1;
  // } else {
  //   currentPokemon--;
  // }
  // if (count(colonel)>1) {
  // changePokemon();
  // }
// })

//changes pokemon forwards
// $('#next').click(function(e) {
//   currentPokemon++;
//   if (count(colonel)>1) {
//   changePokemon();
//   }
// })

//plays the displayed pokemons sound
// $('#sound').click(function(e) {
//   let p = whichPokemon(colonel);
//   let soundFile = `${colonel[p].number}.ogg`;
//   let cry = new Audio(`audio/${soundFile}`);
//   cry.play();
// })

//click to change picture
// $('#newPic').click(function(e) {
//   changePic();
// })

// Search input

// $('#search').submit(function(e) {
//   e.preventDefault();
//   let pokeSearch = $('#searchField').val();
//   console.log(pokeSearch)
//   pokeSearch = pokeSearch.toLowerCase();
//   let foundPokemon = findPokemon(colonel, pokeSearch);
//   if (foundPokemon === 'bummer dude') {
//     $('#searchField').val("NOT FOUND")
//   } else {
//     changePokemon();
//     $('#searchField').val("")
//   }
// })

//Adds a new Pokemon to the PokeDex

// $('#addNewPoke').submit(function(e) {
//   e.preventDefault();
//   let newFriend = $('#addMe').val();
//   addPoke([newFriend]).done(function(e) {
//     makeTrainer();
//   });
//   $('#addMe').val("");
// })

//Deletes previous army and starts a new PokeDex

// $('#changeTrainer').submit(function(e) {
//   e.preventDefault();
//   let newFriend = $('#changeMe').val();
//   createPoke([newFriend]);
//   $('#changeMe').val("");
// })

// RIGHT ARRAY OF BUTTONS

//shows abilities upon clicking button
// $('#abilities').click(function(e) {
//   $('#rightScreen').html('');
//   let p = whichPokemon(colonel);
//   let skillz = getAbilities(colonel[p]);
//   if (skillz.length === 3) {
//     $('#rightScreen').html(`<h3 class="hideMe">${skillz[2]}</h3><h3 class="hideMe">${skillz[1]}</h3><h3 class="hideMe">${skillz[0]}</h3>`);
//   } else if (skillz.length === 2) {
//     $('#rightScreen').html(`<h3 class="hideMe">${skillz[1]}</h3><h3 class="hideMe">${skillz[0]}</h3>`);
//   } else {
//     $('#rightScreen').html(`<h3 class="hideMe">${skillz[0]}</h3>`);
//   }
//   $('#rightScreen').prepend(`<h1 id='#rightDescriptor' class="hideMe">ABILITIES</h1>`)
// })

//Turns on pokedex and creates my trainer
// $('#powerButton').click(function(powerOn){

//   if (isOff) {
//     makeTrainer();
//     changePokemon();
//   } else {
//     colonel = {};
//     $('#leftScreen').html('');
//     $('#rightScreen').html('');
//     currentPokemon = 0;
//   }
//   isOff = !isOff;
// })

