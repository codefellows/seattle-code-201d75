'use strict';

// proof of life
console.log('hello world');

// ask a question that expects a yes or no answer
let disneyland = prompt('Have you ever been to disneyland? Please answer with yes or no');

console.log(disneyland);

// is not good practice to mutate data that comes back from the user

let lowerCaseDisney = disneyland.toLowerCase();
let upperCaseDisney = disneyland.toUpperCase();

console.log(lowerCaseDisney);
console.log(upperCaseDisney);

// if they say yes - Awesome! It truely is the happiest place on earth
// y, YES, Yes
// I want to be able to accept YES, Yes, YEs, yeS
// streamline the data that comes back! All lowercase
// What are the other acceptable answers
// what if they say no?? - Oh too bad! you are missing out.

if (lowerCaseDisney === 'yes' || lowerCaseDisney === 'y') {
  alert('Awesome! It truely is the happiest place on earth');
} else if (lowerCaseDisney === 'no' || lowerCaseDisney === 'n') {
  alert('Oh too bad! you are missing out.');
} else {
  alert('Looks like you didn\'t understand the question');
}


// SWITCH STATEMENT: If i have more than 3???
// prompts always return strings!!!
let funLevel = prompt('On a scale of 1-3, with 3 being the most fun, how fun was disneyland when you went.');

switch (funLevel) {
  case '1':
    alert('I am sorry you didn\'t have fun, maybe you should have gotten a pickle');
    break;
  case '2':
    alert('Should not have eaten that Turkey Leg!');
    break;
  case '3':
    alert('That is what I like to hear! We should go together');
    break;
  default:
    alert('Let me help you plan your next trip');
    break;
}