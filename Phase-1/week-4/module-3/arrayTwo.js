//Part A: .SPLICE, it mutates the original array , add/remove items
let favSports = ['basketball', 'baseball', 'tennis', 'jogging', 'swimming'];
let favSportsCopy = favSports.slice();
let favSportsCopy2 = favSports.slice();

//Jogging is boring, let's splice it out
const boringSports = favSports.splice(3, 1);

console.log('Original favSports', favSports);
console.log('Boring Sports Removed', boringSports);

//What if I still want 5 fav sports after removing jogging?
const replacedSports = favSportsCopy.splice(3, 1, 'ski');

console.log('Original favSportsCopy', favSportsCopy);
console.log('replacedSports', replacedSports);

//What if I don't want to remove any of my sports, but adding ski and boxing?
const addedSports = favSportsCopy2.splice(2, 0, 'ski', 'boxing');
console.log('7 Original favSportsCopy2', favSportsCopy2);
console.log('addedSports', addedSports);


//Part B: .JOIN, it mutates the original array , add/remove items
const seasonings = ['salt', 'pepper', 'sugar', 'black pepper']

const seasoningsLists = seasonings.join(',');
const seasoningsOptions = seasonings.join(',or ');

console.log('Seasoning List====>', seasoningsLists);
console.log('Optional Seasoning=====> ', seasoningsOptions);


//Part C: .CONCAT, it mutates the original array , add/remove items
const bigAnimals = ['tiger', 'lion'];
const smallAnimals = ['rabbit', 'squirrel'];

const bigSmallConcatTogether = bigAnimals.concat(smallAnimals);
console.log('Big concat with small animals ', bigSmallConcatTogether);


//Part D: 2-dimensional array

const arr = [
  [
    ['windows', 'word'],
    ['mac', 'page']
  ]
]
const macEditor = arr[0][1][1];
console.log("mac Editor?", macEditor)

/*
The outer array contains all dogs[[],[],[],[]]
Each element within the array represents a single dog info
Within each element, first index represent the name of the dog, second index refer to the age of the dog
*/
const dogs = [
  ['Blaze', 2],
  ['Max', 3],
  ['Buddy', 1],
  ['Chase', 1]
]

//How do I get all of the names or all of the ages from dogs?

function getEntriesFromNestedArr(nestedArr, idx) {
  let ans = [];

  for (let i = 0; i <= nestedArr.length; i++) {
    let currentDog = nestedArr[i]; // ['Blaze', 2] when i=0
    if (Array.isArray(currentDog)) {
      let currentDogName = currentDog[idx];//'Blaze' when i=0

      ans.push(currentDogName);
    }
  }

  return ans;
}
console.log('getEntriesFromNestedArr', getEntriesFromNestedArr(dogs, 0));

//How do I add breeds and colors to dogs array?
const breeds = ['Poodle', 'Bulldog', 'Chihuahua', 'Golden Retriever']
const colors = ['white', 'brown', 'black', 'gray'];

function addMoreAttributes(nestedArr, attrOne, attrTwo) {

  for (let i = 0; i <= nestedArr.length; i++) {
    //How about adding .slice to create a copy of currentDog? Will it work?
    let currentDog = nestedArr[i]; // ['Blaze', 2] when i=0
    if (Array.isArray(currentDog)) {
      currentDog.push(attrOne[i], attrTwo[i])
    }
  }

  return nestedArr;
}

console.log('addMoreAttributes', addMoreAttributes(dogs, breeds, colors));

//How do I know if I have this dog that match the breed and color?

function doIHaveThisDog(nestedArr, breedColorArr) {
  let match = 0;
  for (let i = 0; i <= nestedArr.length; i++) {
    let currentDog = nestedArr[i]; // ['Blaze', 2] when i=0
    if (Array.isArray(currentDog)) {
      for (let j = 0; j <= currentDog.length; j++) {
        let currentAttribute = currentDog[j];

        if (breedColorArr.includes(currentAttribute)) {
          match++;
        }
      }
    }
  }

  return match === breedColorArr.length;
}

const breedColorOne = ['Bulldog', 'brown'];
const breedColorTwo = ['Chihuahua', 'red'];
const breedColorThree = ['Chi', 'puple'];
console.log('Do I have this dog ONE?==>', doIHaveThisDog(dogs, breedColorOne));
console.log('Do I have this dog TWO?==>', doIHaveThisDog(dogs, breedColorTwo));
console.log('Do I have this dog THREE?==>', doIHaveThisDog(dogs, breedColorThree));

