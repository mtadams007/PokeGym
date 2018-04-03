//VARIABLES

//the pokemon that is being displayed
let currentPokemon = 0;

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
  //first sort the pokemon by id number
  sortFriends(arr);
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

function createPokemon(data){
    pokemon[`${data.name}`] = new PokemonObj(
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilityLoop(data.abilities)
    )
    console.log(`one pokemon '${data.name}' added to hash`);
};



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
