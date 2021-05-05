# Lecture Notes 

## Falsey Value in JavaScript
- false
- 0 (zero)
- '' (empty string)
- null
- undefined
- NaN (not a number)


``` javascript
if (somethingEvaluatesTrue) {
  then do something
}
```

## comparison operators
a == b - "loosley equal to" 10 == '10' - type coercion / weak typing

a === b - "strictly equal to" 10 === 10

a !== b - not equal to (! called bang!)  10 !== '10'

a != b - not loosly equal to 10 != 'banana'

a > b - a is greater than b 10 > 8

a < b - a is less than b 8 < 10

a >= b - greater than or equal to 10 >= 9

a <= b - "less than OR equal too" 

## logical operator

&& - and a && b - both HAVE to be true
|| - or a || b - one has to be true 
!a - bang not true

link to comparison op flash cards: https://docs.google.com/presentation/d/194Ozui-0Yb5zlA0DTfPrsv5DcerHeupZxVNJAkuYIzw/edit#slide=id.p

## Array 
- datatype of Object
- a list of elements - the elements within the array can be any dt
- ['car', 1, {name: 'Sara'}] try not to have arrays with mixed datatypes within the array
- array = [] dynamic size - memory stored non consecutively 
- JS arrays are a zero based index system
- every element in an array has an index(location reference) for where it can be found in the array

## loops

## what are they?
- a very common pattern in programming
- a block of code that repeats over and over until a condition changes and is no longer Truthy

## Why?
- save us from having to write repeating code - make our code dry!

<!-- Dry and readable/understandable are always competing -->
<!-- let fz = "bananas" -->

for every card - pat your head

pat your head 
pat your head 
pat your head 
pat your head 
pat your head 
