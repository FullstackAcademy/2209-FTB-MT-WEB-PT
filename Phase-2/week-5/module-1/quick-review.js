// write a function with a callback 
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
