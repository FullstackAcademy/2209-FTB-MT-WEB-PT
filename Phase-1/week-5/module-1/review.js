/*************************** Function Review *****************************/
//How to define a function? What is inputs, argument and parameters?
function addTwoNums(numOne, numTwo) {
  console.log("This is within my function", numOne + numTwo);

  return numOne + numTwo;
}

//Test cases
let testNumOne = 2;
let testNumTwo = 3;
let testNumThree = 5;
let testNumFour = 8;

//Two different ways to verify your function, console.log within function, or console.log the invoked function
const savedCalc = addTwoNums(testNumFour, testNumThree);
console.log("Saved Calc", savedCalc);
console.log("Logging from outside", addTwoNums(testNumTwo, testNumOne));

/*************************** String Review *****************************/
let sentence = 'Hello Programming';

//Write a function to check and see if the sentence contain certain character?

function checkIfCharExists(str, char) {
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (currentChar === char) {
      return true;
    }
  }

  return false;
}
console.log("checkIfCharExist", checkIfCharExists(sentence, 'x'));

//Changing the above function to check two chracters instead of just one character 

function checkIfCharExists2(str, char) {
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i] + str[i + 1];
    console.log("currentChar", currentChar)

    if (currentChar === char) {
      console.log("i", i, str.length)
      return true;
    }
  }

  return false;
}
// console.log("checkIfCharExist-Check Two Characters", checkIfCharExists2(sentence, 'mm'));

/*************************** Array Review *****************************/
const numArr = [2, 3, 5, 5, 2, 3, 1]; //add to 21
//How to find out what is the number on index 4
console.log("Number at index 4", numArr[4]);

//Write a function to find out the sum of any number array that passed in
function addNumsInArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    sum += currentNum;
  }
  return sum;
};

console.log("addNumsInArr", addNumsInArr(numArr));

//Check if a number exist in array, instead of using a for loop, we can use an array method
//Refer back to the string function, and compare. 
function checkIfANumExistInMyArray(arr, num) {

  if (arr.includes(num)) {
    return true;
  }
  return false;
}
console.log("checkIfANumExistInMyArray", checkIfANumExistInMyArray(numArr, 2));//true
console.log("checkIfANumExistInMyArray", checkIfANumExistInMyArray(numArr, 100));//false


