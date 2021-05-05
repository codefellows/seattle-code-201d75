// 'use strict';
// // This is for our linter


// // proof of life 
// console.log('Hello World');

// alert('Welcome to my Disneyland Guessing Game');
// let userName;
// // get users name
// // let userName = prompt('What is your name?')
// console.log('our user is named', userName);

// // what happens if user doesn't answer --- ''
// // hits cancel --- userName is null

// // I want make sure a user HAS to enter a valid name
// // while(userName === null || userName === '')

// // if (!userName) {
// //   userName = 'guest';
// // }
// while (!userName) {
//   userName = prompt('What is your name? Please a real name');
// }

// console.log(userName);

// alert('Hi ' + userName + '.' + 'Thanks for visiting');

// // lets try the !== comparison operator

// if (userName !== 'Mickey Mouse') {
//   console.log('not mickey');
//   alert('I was kinda hoping you might be someone else...Perhaps the leader of the club.');
// }

// let snackArray = ['Dole Whip', 'Pickles', 'Turkey Leg'];
// console.log(snackArray);

// // Array Methods - Built in functions that work on array

// // let newSnack = prompt('What is your fav snack?')
// //add items to the end of our list - efficient 
// snackArray.push('Hungry Bear Burger');

// // add items the the beginning unshift is inefficient
// snackArray.unshift('mickey pretzel')

// console.log('new array value', snackArray);

// console.log('This is the index of dole whip', snackArray.indexOf('Dole Whip'))


// console.log(snackArray.length);

// // can we loop the through the array and check if someone can guess one of our favorite snacks?

// let snackGuess = prompt('Can you guess one of my favorite snacks?');
// console.log(snackGuess, 'This is their guess');

// // loop through the array

// for (let i = 0; i < snackArray.length; i++) {
//   console.log(snackArray[i]);
//   if (snackArray[i] === snackGuess) {
//     console.log('You got it!!!!');
//   }
// }

// You will have to give the user multiple guesses! 
// allCardsAreBlack - reference FLAG
// let correctGuess = false;
// NESTED LOOP


// We will circle back on this and I will give you a time by 1pm.


// challenge: create a list of your favorite movies. Give the user 5 guesses to figure out one of the movies from your list. If the user guesses correctly tell them they are correct and stop giving them more chances to guess. If they guess incorrectly, let them know and prompt them to guess again. 
// user guesses a movie
// we check all of the movies in our array - if there is a match we will let them know and NOT ask them to guess again
// if there is not a match we will tell them they didn't get it and ask them to guess again (up to 5 times)

// needs:
// a list of movies aka an array
// a variable set to a number of guesses
// we are going to need a flag for when they get it right 

let myFavMovies = ['there will be blood', 'forest gump', 'blade runner', 'harry potter: 8', 'inception', 'scott pilgrim', 'lotr', 'frozen'];

let counter = 5;
let theyGotItRight = false;
while (theyGotItRight === false && counter > 0) {
  alert('you have ' + counter + ' guesses left');
  // they get in the loop and I ask them the question
  let userGuess1 = prompt('Guess one of my favorite movies?');
  let userGuess = userGuess1.toLowerCase();

  // I check their guess against my list of movies
  for (let i = 0; i < myFavMovies.length; i++) {
    if (userGuess === myFavMovies[i]) {
      // if they get it right I tell them
      alert('You got it right!');
      // change they got it right to true
      theyGotItRight = true;
    } 
  }
  
  if (theyGotItRight === false) {
    alert('I am sorry you are incorrect, guess again');
  }
  // I did not decrement the counter!!!
  counter--;
}
alert('These are all the possible correct answers ' + myFavMovies);

let myNum = 7;

for (let i = 0; i < 5; i++) {
  alert('You have this many guesses left ' + (5 - i));
  let userGuess = prompt('Pick a number between 1-10');
  let numericalGuess = parseInt(userGuess);
  console.log(numericalGuess);
  if (numericalGuess === myNum) {
    alert('Congratulations! You got it right!');
    break;
  } else if (numericalGuess > myNum) {
    alert('You guessed too high! Try again');
  } else if (numericalGuess < myNum) {
    alert('You guessed too low! Try again');
  } else {
    alert('please use a valid number')
  }
}