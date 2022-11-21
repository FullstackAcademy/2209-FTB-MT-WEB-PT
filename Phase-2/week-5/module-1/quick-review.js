// REVIEW write a function with a callback 
function usesCallback(callback){
    console.log("I am about to call your callback")
    callback()
}

const printHello = () => {
    console.log("Hello")
}
const printGoodbye = () => {
    console.log("Goodbye")
}

// usesCallback(printGoodbye)


// call a callback on each element of an array
const alphabet = ['a','b', 'c', 'd', 'e','f']

function printUpperCase(currentElement, currentIndex, arrayItself ){
    console.log(currentElement.toUpperCase());
}

alphabet.forEach(function(element, index, wholeArray){
    console.log(element, index, wholeArray)
});

// CLASS LECTURE
const numbers = [1, 2, 3, 4, 5];

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 1);
  }
}

addOne(numbers);

//The function addOne() accepts an array, adds one to each number in the array, and displays it in the console. The original values remain unchanged in the array, but the function is doing something for each value.

//However, using what may be the most common higher order function, forEach(), we can simplify this process:

const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach((number) => console.log(number + 1));

//another one OLD filter 
const numbers2 = [1, 2, 3, 4, 5];

function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}
const oddArray = isOdd(numbers);
console.log(oddArray);
// NEW Filter
const numbers3 = [1, 2, 3, 4, 5];

const oddArray1 = numbers.filter((number) => number % 2 !== 0);
console.log(oddArray1);


//REDUCE
//What if we wanted to find the total of all values in the numbers array?
//Without a higher order function, I could do this:


function getTotalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

const totalValue1 = getTotalValue(numbers);
console.log(totalValue);


//The function getTotalValue() accepts an array, defines the total variable as equal to zero, and loops through the array while adding each element to the total variable. Finally, it returns the total.
//With the higher order function reduce(), this process can yet again be abstracted away:

const totalValue2 = numbers.reduce((sum, number) => sum + number);
console.log(totalValue);

// The higher order function reduce() expects two parameters in the anonymous function within.
// The first parameter is an accumulator and the second parameter is an element from the numbers array.
// The accumulator parameter (sum in the example above) keeps track of the total as reduce() applies the anonymous function to each element of the array.



