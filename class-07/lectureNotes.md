# Lecture Notes

## constructor functions 
## what are they?
- a special type of function that is a factory for objects
- determine a blue print for an object
- are named with a Capital letter!

## why?
- make code dry 
- prevent bugs
- ensure predictable/uniform data in like objects

## Prototypes
### what 
- a template object that other objects can inherit traits from
- Prototypes are the mechanism by which JavaScript objects inherit features from one another (def)

show docs for prototypes
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

## Tables in HTML
- like a spread sheet
- rows and columns
- table element
  - table head
  - table body
    - table rows
      - table cells
  - table footer

Code Demo

Compare the amount of code needed to write an object literal and a constructor function. On the surface, constructors don't appear to save much time, but point out that it takes a single line to create a new instance of an object with a constructor, whereas an object literal required the same lines of code to be written out each time.
For example: if it takes 10 lines to make each student into an object literal, and there are 25 students in the class, that is 250 lines of code
However, with a 10-line constructor, the same can be accomplished in 35 lines of code
Take time to explain the nested nature of creating a table in JavaScript. For example, each table has children, each of which is <tr>, and each <tr> then has its own children, each of which is <th> or <td>. Run through a basic demonstration of how to append <td>/<th> elements to a <tr> element, then append the <tr> element to a <table> element. This will provide some basic context for the lab setup.

### upcoming article for flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/