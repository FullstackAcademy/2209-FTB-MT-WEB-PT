const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function doSomething(arr) {
  for (let i = 0; i < arr.length; i++) { // n
    const element = arr[i];
    console.log(element)
  }
  for (let i = 0; i < arr.length; i++) { // n
    const element = arr[i];
    console.log(element)
  }
}
// doSomething(input) // O(n)

function doSomethingNested(arr) {
  for (let i = 0; i < arr.length; i++) { // n
    const element = arr[i];
    console.log(element)

    for (let j = 0; j < arr.length; j++) { // n
      console.log(arr[j])
    }
  }
}
// doSomethingNested(input) // O(n^2)

function doSomethingConstant(arr) {
  console.log(arr.length)
}
// doSomethingConstant(input) // O(1)

function findWord(word, dict) {
  const dict = ['apple', 'banana', 'magic', 'time', 'zoo'] 

}
findWord('time', dict)
