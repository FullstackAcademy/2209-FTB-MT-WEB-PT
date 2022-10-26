## What's the DOM 

## What's a node 

## Creation and Adding
1. Create an Element of different types 
    - innerHTML
    - innerText
2. Add Element to page 
3. For Loop to create and add

## Accessor Methods 
1. get by Id, class, tag name
2. query Selector 

## Accessing Nested Values 
1. Children
    - element.children, element.lastChild, element.firstChild
2. Access siblings
    - element.nextElementSibling, element.previousElementSibling
3. Access parent
    - element.parentElement

## Removal 
1. Remove Element from page 
2. For Loop to remove 


## Attributes of Nodes 
- element.style.backgroundColor = “blue”;
- element.className = className attribute is a string of all of a Node’s classes
- element.classList = classList is HTML5 way to modify which classes are on a Node

## Data attribute 
An attribute prepended with data. Data can be stored on HTML using
data-${key}=value 
```html 
    <h1 data-testNumber="1"> Hello </h1>
```