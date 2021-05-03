# Lecture Notes

## New school way to organize your front end files
- seperation of concerns 
  - styles
  - script
  - html
- JUST for today we are going to put them together

## Inline styles and script
- the old way of inserting styling and script directly into our HTML
- we no longer do this due to sepperation of concerns
  - for styling add a `style` attribute directly to an element:
  - `<h1 style="color: green">Welcome to Class</h1>`
  - to add script insert it in between opening and closing `script` tags
  - `<script> console.log('Hey class!!!'); </script>`

## internal styles
- these are styles added to the head of your html page within a `style element` that set rules for the styling of your page as a whole.
-  `<style> body {background-color: darkgoldenrod;} li {color: red;}</style>`
