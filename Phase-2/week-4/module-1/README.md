# Async / Await 

## Syncronous Code 
- Javascript is a syncronous, single threaded programming language. 
That means that each line of code is executed line by line and in order.
If a function is called in one of those lines, context switches to the called function.
Then, it is executed line by line, to completion before context is switched back to the original function 
The Call Stack orchestrates this behavior. 

## Call Stack 
The Call Stack is a structure that exists in both the browser and in node.
It organizes what functions should be invoked and when. 
When a function is called, it is placed upon the call stack, executed in full and then removed from the call stack.
Nested Function calls will be placed on the calls stack on top of their parent functions and pop off when they finish executingf 

### Example 1: Three independent function calls 
http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIk9uZSIpCmNvbnNvbGUubG9nKCJUd28iKQpjb25zb2xlLmxvZygiVGhyZWUiKQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
```js
console.log("One")
console.log("Two")
console.log("Three")
```
### Example 2: Nested Function Calls 
http://latentflip.com/loupe/?code=ZnVuY3Rpb24gb3V0ZXIoKXsKICAgIGNvbnNvbGUubG9nKCJvdXRlciIpCiAgICBmdW5jdGlvbiBpbm5lcigpewogICAgICBjb25zb2xlLmxvZygiaW5uZXIiKQoKICAgICAgICBmdW5jdGlvbiBkb3VibGVJbm5lcigpewogICAgICAgICAgICBjb25zb2xlLmxvZygiRGJsIElubmVyIikKICAgICAgICB9CgogICAgICAgIGRvdWJsZUlubmVyKCkKICAgIH0KCiAgICBpbm5lcigpCn0KCm91dGVyKCk%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
```js
function outer(){
    console.log("outer")
    function inner(){
      console.log("inner")

        function doubleInner(){
            console.log("Dbl Inner")
        }

        doubleInner()
    }

    inner()
}
outer()
```

## Callback Functions - Functions passed into other functions 
Callback functions are merely functions passed into other functions through parameters. 
The contract for this function is that we can pass in any function we wish and whatever function we pass in will be called. 

```js 
    function callThisFn(functionToCall){
        console.log("Calling the Function")
        functionToCall();
    }

    function sayHello(){
        console.log("Hello!")
    }

    function sayGoodbye(){
        console.log("Goodbye")
    }
    callThisFn(sayHello)
    callThisFn(sayGoodbye)
```

## Asyncronous
Contrasting to syncronous code, asyncronous code executes outside of a linear order. 
When an asyncronous function is called, it is taken off the call stack, executed elsewhere. 
When the asyncronous function completes, the Event Loop will grab the Callback and place it on the call stack to be executed 
All syncronous code available will be executed before any asycronous callback functions  

Bake a cake 
1. Preheat Oven ===================>
2.              Make Batter ========> 
3.                                    Bake Batter =====> 
4.                                                Make Icing 




## Event Loop 
The event loop is a piece of software running inside Browsers or in Node.
When a function reaches out to an API or performs an async function, the event loop looks for those tasks that have completed. 
Then it sends any callbacks specified to run after completion to the call stack.
- There are 2 ways we can define what code should be executed after async functions => Callbacks and Promises

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


## Callbacks 
- We can use callback functions to execute chunks of code AFTER the 
```js 
    function myCallbackFn(){
        console.log("Now Print to Screen")
    }

    console.log("Wait 3 secs")

    setTimeout(myCallbackFn, 3000)
    setInterval(myCallbackFn, 3000)
```

## Promises 
A promise is a JavaScript object that represents the eventual result of an asynchronous operation.
Again, just an object with value and status. 
Javascript will usually handle updating the status property here. But a status stays in pending until the function completes, moves to rejected if there's an error or moves to resolved if the function completed successfully
Instead of passing in a callback, there are ways that we can attach code to run after a promise's status changes to Resolved  

Promise = {
    status: pending | resolved | rejected,
    value: whatever is returned from the async function
}

JavaScript Promise in 100 Seconds
https://www.youtube.com/watch?v=RvYYCGs45L4
- resolved / rejected 

Buzzing Coaster => Table is Ready

## async functions
Async functions execute off of the call stack and ALWAYS RETURN PROMISES 
```js 
    async function asyncDemo(){
        console.log("This will be run second")
        return 1;
    }

    const result = asyncDemo();
    console.log("This will be run first")
    console.log(result);
```

## .then 
We can chain functions to execute after an async function with .then()
we can also pass along return values through this chain of functions 

```js
    async function returnOne(){
        console.log("Executing Return One");
        return 1
    }

    //returns a Promise 
    let result = returnOne() // ===> [Promise]

    returnOne()
        .then(function(whateverReturnOneReturns){ //1
            console.log("Executing the .then function chained to  ReturnOne");
            console.log("Value Passed in", whateverReturnOneReturns)
         })
         .catch((message) => {
             console.log("The error was ", message)
         })
```

## await 
```await``` will pause and wait on an async function until it completes. Then, await will extract the return value 
```await``` must only be used inside of an async function 

```js 
    async function grabALetter(){
        return "A"
    }

    async function doABunchOfStuff(){
        console.log("Do thing 1") 
        console.log("Do thing 2") 
        let returnValue = await grabALetter(); //A
        console.log("Grabbed Letter is" , returnValue)
        console.log("Do thing 4") 
    }

```

