## PreReading
- Selectors 
- Box Model
- Backgrounds, Borders
- Values and Units
- Sizing Items

## Quick Review: Selectors

## Business 
1. First Graded Project is due the week Sunday 10pm local time.
- Projects are to assess your progress and foundations 
2. Phase 1 Outline 
3. Documentation 

## Pair Programming 
- Driver
    - Shares Screen
    - Writes Code
    - Asks Clarifying Questions 
- Navigator 
    - Reads the Prompt 
    - Describes the Approach 
    - Spots Syntax Issues 

# Demo
## CSS 
- source for properties
    - [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
    - [W3 Schools](https://www.w3schools.com/cssref/)
- Box Model
    - Everything in CSS is a box 
    - `margin` - space between this element and other elements 
    - `padding` - Space between the Content and the border 
    - `border` - Frame of Content, space between the padding and margin
- Sizing Items in CSS
    - px - measured in computer pixels
    - em - Equal to the font size of the element their on
    - rem - equal to the root font size 
    - in - inches
    - vh && vw - based on the size of the browser the user is looking at  
- Backgrounds && Borders
    - `background-color`
    - `background-image`
    - `border`
    - `border-radius`
- linking your css and html
- importing CSS 'https://fonts.googleapis.com/css?family=Gelasio|Open+Sans&display=swap'

```html 
<link rel="stylesheet" href="index.css" />
```

- CSS
  - 3 ways of defining css (we'll get to more in JavaScript, but these are a few basics)
    - Inline - `<h1 style="background-color: red"></h1>`
    - Style tag - `<style></style>`
    - Stylesheet - `<link rel="stylesheet" href="index.css" />`
  - Specificity - example
    - Tagname least specific
    - Class next
    - ID most specific
    - Inline style most specific (in this examples)
  - Selectors
    - Parent-child relationship
    - Class vs id
    - combining class & id
    - `selector > selector` vs `selector selector` vs `selector.selector`
  - Box Model
    - Everything is a box.  Relationships to each other is defined as such.
    - Many different `display` options. (block, inline, none, flex, grid)
  - Rules of `display: block` and `display: inline`
    - Block
      - new line
      - width generally spans 100% of container
      - `width` and `height` can be defined.
      - Examples `h1`, `p`, `header`, `main`, `footer`
    - Inline
      - No new line.
      - `width` and `height` don't apply
      - Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
      Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.
      - Examples `span`, `a`, `em`, `strong`
    - Demo span changing to block
  - Background Color
  - layout - Change image to display block and center it via this method
    -  margin of 0 auto 0 auto (or just 0 auto)
  - Values/units
    - px, em, rem, in, and vh units.
  - Images, media, form elements - Specifically, sizing images
    - float: right;
  - Border radius
    - Rounding corners
    - circle border-radius 50%
  - Colors
    - named colors, hex values, and rgb values.
    - Use https://color.adobe.com/create
    - rgb to hex https://www.rgbtohex.net/
  - Links
    - a:hover
    - text-decoration: underline
  - Styling Text
    - Text/Font
      - generic font names (sans-serif, monospace), 
      - named fonts (Helvetica, Arial), 
      - Google Web Fonts. (https://fonts.google.com/)
    ```css
    <!-- use this -->
    @import url('https://fonts.googleapis.com/css?family=Gelasio|Open+Sans&display=swap');
    <!-- or this -->
    @font-face {
      font-family: "myFont";
      src: url("myFont.woff");
    }
    html {
      font-family: "myFont", "Bitstream Vera Serif", serif;
    }
    ```

### Project 
- Create CSS Files  
- CSS Files are connected to html 

## Class Concepts for NEXT CLASS
CSS Layout
Normal Flow
Floats
Positioning