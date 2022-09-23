## Prereading
[MDN CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
[Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
[Floats](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)
[Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#Fixed_positioning)

### CSS Layout
- Where is stuff positioned?
- What does a browser even do?
- display: 
  - block
  - inline
  - inline-block
  - none

### What is Normal Flow?
- It is the DEFAULT, can be overridden with CSS
- Top down, left to right

### Floats
- It takes element out of normal flow
- Pins the image to the left / right side of the screen
```css 
  clear: left;
```
Float on elements will continue. Stop this with the "clear" property. In our case, "clear: left;" on the list.

### Position
#### static
- default
- not affected by the top, bottom, left, and right properties.

### relative 
- is positioned relative to its normal position.


#### absolute
- Completely removes element from normal flow
- Offsets from the edges of the element's containing block. (The containing block is the ancestor relative to which the element is positioned.)
- Most useful in this case to use properties like "top" "bottom" "left" and "right" to position however you want
#### fixed
- Removes element from document flow in the same way as absolute positioning. 
- However, offsets applied from the viewport. (not containing block, like absolute)
#### sticky
- Makes an element act like 
  - position: static 

- Until it hits a defined OFFSET from the viewport, 
- At which point it acts like 
  - position: fixed. 


Flow, Floats, Positioning, overflow, Touch of Pseudoclasses (Hover and active) 


## Project - Module 
- Float Images 
- Give `main` some padding
- Unline the Active Link
- Give Header and Footers Fixed Positioning

[Workshop Link](https://learn.fullstackacademy.com/workshop/5e2f06f4f06d2e0004f200f1/landing)

