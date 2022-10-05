# JavaScript: Control Flow, Boolean Logic, Functions and operators.

## Quick Review: 
Let say you're hungry and you have two paths: Don't order takeway or order takeway. 
In your head, go through the thought process of that you would ask yourself to justify wether you should get takeout or not. 
*Consider* - Did you eat recently? is there any food in the house? do you want to eat the food in the house? is it time to eat? Do I want to spend the money?

### Daily - Key Topics
- Control Flow
- Boolean Logic
- Equality Operators
- Functions and Paramaters

### Lessons

<hr>

## Lecture Notes

### Control Flow
- Decisions  
  - We make decisions based on conditions all the time. 
  - Part of what makes programming interesting is that we can tell computers how to make decisions, too. A computer can ask itself: "If this is true, I'll do this. Else, I'll do this other thing. This is called control flow (that is, we're controlling the flow of the program).
  - We are giving our program the avility to respond to changing conditions and intelligently decided automate repetitve tasks.
  - By default Javascript code is executed from top to bottom, line by line however we can manipulate this with control flow. Control flow allows our program to make decisions about what code is executed and when. 
  - Certain sections of code can be executed or looped over based upon whether a given condition is true or false.

- Boolean Logic
  - First, we'll need some way to represent the difference between yes and no, or true and false. The way to do this in JavaScript is with the Boolean data type.
  - The **Boolean data type** has two values: **`true` and `false`**. Just like numbers and strings, we can store these values in variables to give them more meaning.

### Variables

Variables name storage for the value they contain.  Because JavaScript is a dynamically typed language, you can assign a value of one type to a variable and
then later assign a value of a different type to that same variable. 

There are two ways to declare variables: `let` and `const`. The basic rule of thumb should be to use `const` when you don't need to reassign that variable, and `let` when you do. 

In JavaScript, `null` represents the explicitly omitted value, whereas
`undefined` represents the default omitted value.  Variables that have been
declared but are uninitialized or unset have the value `undefined`.

```js
let y = 10;
const x = 13;
```

### Boolean Logic
How to evaluate more complex situations (more than one factors to consider).

different conditions:

- AND Logic
- OR Logic
- NOT Logic


### Functions and Parameters 
Functions are re-usable blocks of code. Up until now, we haven't worries about re-using any of the code that we've written. However, as our programs get longer and longer, we'll often find ourselves wanting to perform the same task again and again.

