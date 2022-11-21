const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* 
    forEach - call the given call back on each element in the array. 
    Can't stop iteration and return values don't matter 
    Quicker way of a for loop but with slightly less control 

    Callback takes 2 params (element, index, array)
*/
const timesTwoPrint = (num) => {
  console.log(num * 2);
  return num * 2;
};

// numbers.forEach(timesTwoPrint);

//Using an anonymous function
// numbers.forEach(function(element, index){
//     // our way of skipping
//     if (index === numbers.length - 1) return
//     if (element % 2) console.log("Odd", element)
//     else console.log("Even", element)
// })

/* 
    map - call the given call back on each element in the array. 
    Return a new copy of the array with the return value for each call back called 
    Callback takes 2 params (element, index, array)
*/
const justHellos = numbers.map(() => {
  return "Hello!";
});

const evensAndOdds = numbers.map((element, index, array) => {
  if (element % 2) return element + "Odd";
  else return element + "Even";
});

/* 
    filter - call the given call back on each element in the array. 
    Return a new copy of the array with the return value for each call back called 
    Truthy return values will be included in the new array 
    Falsey values will be excluded
    Callback takes 2 params (element, index, array)
*/
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; ===> [1, 3, 5, 7, 9]

const evensOnly = numbers.filter((element) => {
  return element % 2 === 0;
});

/* 
    reduce - takes in 2 params, the callback and a starting value
    call the given call back on each element in the array. 
    Callback takes 2 params (accumulator, element, index, array)

    For each callback, use the current element to update or affect the accumulator 
    return the accumulator each time so that it builds 
*/
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; ===> 12345678910

const totalSum = numbers.reduce((accum, currentNum, index, array) => {
  accum += currentNum;
  if (index && (index + 1) % 3 === 0) accum += ",";
  return accum;
}, "");

console.log(totalSum);

// Chaining
// The Array functions that return new arrays can be chained
// each one passing it's return array to the next array method for it to operate on

// [2, 4,  6,  8, 10];

const evensSum = numbers
  .filter((element) => {
    return element % 2 === 0;
  }) //[2, 4,  6,  8, 10];
  .reduce((accum, num) => {
    accum += num;
    return accum;
  }, 0); //

// Extended Example
/*
  Tic Tac Toe 
  We need to create a set of divs for each element in the array 
  innerText should be what ever the value is 

  2 functions create and render 
*/

const createListOfSquares = (state) => {
  // state has a property called board
  //  [null, null, null, "X", "O", "X", "O", "O", "X"] ==> [DOM, DOM, DOM, DOM ]

  return state.board.map((square, index) => {
    // CREATE DOM NODES for each element in the array
    return Square(square, index);
  });
};

const Square = (squareValue, index) => {
    const newSquare = document.createElement("div");
    // add the value to display
    newSquare.innerText = squareValue;
    // add a way for us to quickly lookup the cell
    newSquare.id = index;

    newSquare.className = "square"
    if(squareValue) newSquare.className += " taken"

    return newSquare
}

const renderSquares = (squares) => {
    const board = document.getElementById("board")
    squares.forEach((elem) => {
      board.appendChild(elem)
    })
}

const state = {
  players: ["X", "O"],
  board: [null, null, null, "X", "O", "X", "O", "O", "X"],
};
const squares = createListOfSquares(state);
console.log(squares)
renderSquares(squares)
