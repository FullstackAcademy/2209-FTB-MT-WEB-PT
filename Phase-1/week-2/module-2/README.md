# Media Queries 

# PreReading
- print vs screen
- `min-width`, `max-width`
- [Intro to Media Queries](https://www.digitalocean.com/community/tutorials/css-media-queries)

# Quick Review: Set up a media query
```css
@media screen and (max-width: 650px) {
  body {
    background: purple;
  }
}
```

## Mobile First Design
- Starting the design process from the smallest of screens: mobile. 
- This is great, but what if we want it to look good on a huge screen?
- What looks good on a tiny screen does not necessarily look good on a huge screen.
- What if we wanted it to look amazing on both?

## Responsive Design
- Rendering your page well on a variety of devices and window or screen sizes.  
- We'll mostly focus on screen size in this cohort.

## The Magic Word
@media - says we are "querying" the media.  We are asking "what device type/shape/size are you?" 

# Demo 
- What's a media Query? Why do we need them 
- How to view with Chrome Dev Tools
- 700px 
  - .single-dog-card: change direction to column, img width to 100%
  - main nav: change direction to row and justify content to space aroung
  - hide desktop nav
  - show mobile-nav
  
- 500px
 - main nav: change to column, space around and align-items center
 - main a width to 100%

# Workshop 
[Media Queries](https://learn.fullstackacademy.com/workshop/5e30aeeb326e9e00048348e5/content/5e30aeeb326e9e00048348f6/text)

# Project 
- Items html and Css
  - Flex wrap the items
  - Align the items to flex start
  - set flex grow to 1
  - Style the .item cards
  - Align the children of .item-name
  - Set rules for screen < 768px
