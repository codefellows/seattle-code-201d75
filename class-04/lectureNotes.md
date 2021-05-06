# Lecture Notes

## Display and Position
- two properties that will help contribute to you getting your layout to look the way you want it to. 

## display: inline
- puts an element 'inline' with the other elements around it. Any height and width properties will have no effect.

## display: inline-block
- Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

- Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

- Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

## display: block
- Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width of it's containing element.

## Positioning
- 2 types
  - static
  - relative-type
    - relvative
    - absolue
    - fixed
      - sticky

### Static is standard - where it normally sits

### Position Relative
Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute
Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed
fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.


## Functions

- a new datatype

### what
- a function is a group of statement that perform a task or calculate a value, stored within a structir that prevents them from running until the function is 'called' or 'invoked'

### why
- Functions are REUSABLE!
- functions make our code DRY
- PREVENT BUGS

 ```javascript
  function bakeACake() {
    pour ingredients into a bowl
    mix ingredients for 3 minutes
    pour the batter into pan
    bake for 40 min at 350
 }
 ```

#### Monday
- bakeACake()

#### Tuesday
- bakeACake()

#### Wednesday
- bakeACake()