# Lecture Notes

``` js
myFunct();
const myFunct = function() {};
function myFunct() {};

```
<!-- Changes the ability to use as an argument? Lets learn more on this -->

## Hoisting
- in js 2 passes are made to interperet the language/code
  - first pass
    - variable names are stored in memory (only look at left side)
    - functions are DECLARED meaning their variable names are stored
  - second pass we execute
    - assignments are read and code is executed

## Pass by reference vs pass by value
- js ALWAYS PASSES BY VALUE
- even when passing a refernce as a value
- even with objects and arrays: It's always pass by value, but for objects the value of the variable is a reference.
- no matter what anyone tells you!

``` js
let num1 = 3
let num2 = 5
function myFunct(a, b) {
  a = 15;
  return a+b;
};

myFunct(num1, num2);
console.log(num1) value would still be 3

with objects this looks different
```


