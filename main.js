//count up from 5 and stop at 10
for(let counter = 5; counter < 11; counter++){
  console.log(counter)
}

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

//list vacation spots as long as i is less than length of array and stops when loop is done
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i])

}

// mutual followers loop
const bobsFollowers = ['Chris', 'Steve', 'Harvey', 'Tom'];
const tinasFollowers = ['Chris', 'Steve', 'Will'];
const mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)

//Random card until spade While loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  
console.log(currentCard)
}

//Cups Added do while loop

let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
  cupsAdded++;
}while(cupsAdded < cupsOfSugarNeeded)
  console.log(cupsAdded)

//The break keyword in for if loop
const locationArray = ['France', 'Europe', 'Bahamas', 'Italy'];

  for(let i = 0; i < locationArray.length; i++){
  console.log(locationArray[i])
  if(locationArray[i] === 'Bahamas'){
  break;
  }
}
console.log('Nice beach over there!')

//Grocery list for if loop with break
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

for(let i = 0; i < groceryList.length; i++){
  console.log(groceryList[i])
  if(groceryList[i] === 'pasta'){
     console.log('Grab the pasta')
    break;
   }
  }

//for if loop for human to whale translation
let input = 'turpentine and turtles';
const vowels = ["a", "e", "i", "o", "u"];
let resultsArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u'){
      resultsArray.push(input[i])
    }
  for (let j = 0; j < vowels.length; j++) {
    
    if (input[i] === vowels[j]) {
      resultsArray.push(input[i]);
    }
    
  }
}
let resultString = resultsArray.join('').toUpperCase()
console.log(resultString);

   



