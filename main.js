//VARIABLES

//michael contains Michael's pokemon
let michael;
//the pokemon that is being displayed
let currentPokemon = 0;
//which way the pokemon is facing for the switch pic button
let isFront = true;
//checks if the pokedex is on or off
let isOff = true;

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

let makeTrainer = () => {
  //first sort the pokemon by id number
  sortFriends(army);
  colonel = new Trainer(army);
  return colonel;
}

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


//click on stats to display
// $('#stats').click(function(e) {
//   let p = whichPokemon(colonel);
//   displayStats(colonel[p]);
// })


//SUB FUNCTIONS


//creates the array of pokemon to make trainer
// let createFriends = (arr) => {
//   let i = 0;
//   while (i<arr.length) {
//     createPoke(arr[i]);
//     i++;
//   }
// }

//Puts pokemon in order by their id number
// let sortFriends = (arr) => {
//   arr.sort(function(a, b){
//     return a.number-b.number
//   })
// }

//made to create trainer after everything loads




// uses modulus to cycle through pokemon
// let whichPokemon = (obj) => {
//   let mod = count(obj);
//   let counter = currentPokemon%mod;
//   counter = Math.abs(counter);
//   return counter;
// }



//Changes picture of pokemon from front to back
// let changePic = () => {
//   $('#leftScreen').html('');
//   let p = whichPokemon(colonel);
//   $('#leftScreen').append(`<h2 id='pokeName'>${colonel[p].name}</h2>`);
//   if (isFront) {
//     $('#leftScreen').prepend(`<img src='${colonel[p].backPic}'>`);
//   } else {
//     $('#leftScreen').prepend(`<img src='${colonel[p].frontPic}'>`)
//   }
//   isFront = !isFront;
// }

//shows the stats of a pokemon
// let displayStats = (obj) => {
//   $('#rightScreen').html('');
//   $('#rightScreen').append(`<h3 class="hideMe"> HP: ${obj.hp}</h3><h3 class="hideMe"> ATTACK: ${obj.attack}</h3><h3 class="hideMe"> DEFENSE: ${obj.defense}</h3><h3 class="hideMe"> SPECIAL ATTACK: ${obj.specialAttack}</h3><h3 class="hideMe"> SPECIAL DEFENSE: ${obj.specialDefense}</h3><h3 class="hideMe"> SPEED: ${obj.speed}</h3>`);
//   $('#rightScreen').prepend(`<h1 id='#rightDescriptor' class="hideMe">STATS</h1>`)
// }

//pull abilities from pokemon
// let getAbilities = (obj) => {
//   let skillz = [];
//   let i = 0;
//   while (i<obj.abilities.length) {
//     let ability = obj.abilities[i].ability.name;
//     skillz.push(ability);
//     i++;
//   }
//   return skillz;
// }

//function to find a pokemon by name given a trainer and a name
// let findPokemon = (obj,str) => {
//   let i = 0
//   let lengthOfPokemon = count(obj);
//   while (i<lengthOfPokemon) {
//     if (str === obj[i].name) {
//       currentPokemon = i;
//       return obj.get(str);
//     }
//     i++;
//   }
//   return 'bummer dude';
// }

//CALLS FOR PAGE

//creates my army for the Pokedex
// createFriends([68,94,'magikarp']);
