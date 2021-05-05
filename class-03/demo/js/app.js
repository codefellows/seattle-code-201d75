'use strict';
// This is for our linter


// proof of life 
console.log('Hello World');

alert('Welcome to my Disneyland Guessing Game');
let userName;
// get users name
// let userName = prompt('What is your name?')
console.log('our user is named', userName);

// what happens if user doesn't answer --- ''
// hits cancel --- userName is null

// I want make sure a user HAS to enter a valid name
// while(userName === null || userName === '')

// if (!userName) {
//   userName = 'guest';
// }
while (!userName) {
  userName = prompt('What is your name? Please a real name');
}

console.log(userName);

alert('Hi ' + userName + '.' + 'Thanks for visiting');

// lets try the !== comparison operator

if (userName !== 'Mickey Mouse') {
  console.log('not mickey');
  alert('I was kinda hoping you might be someone else...Perhaps the leader of the club.');
}

let snackArray = ['Dole Whip', 'Pickles', 'Turkey Leg'];
console.log(snackArray);

// Array Methods - Built in functions that work on array

// let newSnack = prompt('What is your fav snack?')
//add items to the end of our list - efficient 
snackArray.push('Hungry Bear Burger');

// add items the the beginning unshift is inefficient
snackArray.unshift('mickey pretzel')

console.log('new array value', snackArray);

console.log('This is the index of dole whip', snackArray.indexOf('Dole Whip'))


console.log(snackArray.length);

// can we loop the through the array and check if someone can guess one of our favorite snacks?

let snackGuess = prompt('Can you guess one of my favorite snacks?');
console.log(snackGuess, 'This is their guess');

// loop through the array

for (let i = 0; i < snackArray.length; i++) {
  console.log(snackArray[i]);
  if (snackArray[i] === snackGuess) {
    console.log('You got it!!!!');
  }
}

// You will have to give the user multiple guesses! 
// allCardsAreBlack - reference FLAG
// let correctGuess = false;
// NESTED LOOP


// We will circle back on this and I will give you a time by 1pm.