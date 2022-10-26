## What's an event 
_Actions or occurances that happen in the browser that the browser tells you about so you can respond to them in some way_
- click
- form submit 
- mouseover 
- scroll

## Event Handlers
_functions that will be triggered by certain events_
3 parts 
1. the element the event occurs on
2. the event we're listening for 
3. the function to be triggered 

```js
element.addEventListener('click', function(){
    console.log()
})
```


## Event Lifecycle 
### Capturing Phase:
- From the root, an event is directed to its intended target
- If there is a matching event listener along the way, it is triggered
### Target Phase:
- The event reaches its intended target and the event fires on the target node
- If there is a matching event listener, it is triggered
### Bubbling Phase:
- From the intended target, the event bubbles up back up to the root of the document
- If there is a matching event listener along the way, it is triggered

