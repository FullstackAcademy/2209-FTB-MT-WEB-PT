# Higher Order Functions 
_In JS, Functions can be passed into and returned from functions the same as any other data type_

## Callbacks - Functions passed into other functions 
```js
   const count = 1
   const addTo = () => count++
   const subtractFrom = () => count--

   const affectCount = (callback) => {
       callback()
       console.log("Current value of Count is ", count)
   }
  affectCount(addTo)

```

## Function Factories - Using Functions to Create Functions 
```js
    function createNumberAdder(determiner){
         
        if (determiner){
            /*
                This is anonymous function. 
                We can define it inline and only reference it here
            */
            return function(num){
                return num + 1
            }
        } else {
            return function(num){
                return num + 2
            }
        }
    }

    const addTwo = createNumberAdder(false)
    console.log(addTwo(3)) //5
```
