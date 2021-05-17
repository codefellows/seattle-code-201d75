'use strict';

// randomly want to put two goats on the screen
// allows users to click on one of the two goats
// tally the votes each image gets
// allow a certain number of votes and stop voting after that

// a user clicks on a goat
// add to the goat object 
// check how votes we have so far, if we still have votes left
// render more images
// repeat
// if not turn off listener
// render results

// -------------------------- global variables/constants
const resultsPannelUlElem = document.getElementById('goat-clicks');
const goatImageSectionTag = document.getElementById('all_goats');
const leftGoatImageTag = document.getElementById('left_goat_img');
const rightGoatImageTag = document.getElementById('right_goat_img');
const leftGoatH2Elem = document.getElementById('left_goat_h2');
const rightGoatH2Elem = document.getElementById('right_goat_h2');

let voteCounter = 0;

// come back to define current goats
let currentRightGoat = null;
let currentLeftGoat = null;

// goat constructor function
// names, image
function Goat(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.timesShown = 0;

  // you might not see this in production code depending on where you work but it is a handy way of getting every goat into the allGoat array every time you make one
  Goat.allGoats.push(this)
}

// let locations = [];
Goat.allGoats = [];

// make a method that renders one goat to the page
// needs to know 'this'
// needs to know where to render it h2 image tag
Goat.prototype.renderGoat = function(h2, imageTag) {
  imageTag.src = this.imgPath;
  h2.textContent = this.name;
}

// make a global function that takes two goats and calls their render method - take two goats as arguments
function renderTwoGoats(leftGoat, rightGoat) {
  leftGoat.renderGoat(leftGoatH2Elem, leftGoatImageTag);
  rightGoat.renderGoat(rightGoatH2Elem, rightGoatImageTag)
}

// // build this after the pick new goats function?
// const renderNewGoats = function (leftIndex, rightIndex){
//   // we render goats based off the random goat we picked
//   leftGoatImageTag.src = GoatPicture.allImages[leftIndex].url;
//   leftGoatH2Elem.textContent = GoatPicture.allImages[leftIndex].name;
//   rightGoatImageTag.src = GoatPicture.allImages[rightIndex].url;
//   rightGoatH2Elem.textContent = GoatPicture.allImages[rightIndex].name;
// };

// pick random goats
// maybe want have those global vars that represent the current goats that we pick
// write a function that picks one goat, and then another, making sure the first and the second goat are not the same
function pickGoats() {
  const leftGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
  // let rightGoatIndex = Math.floor(Math.random() * Goat.allGoats.length)
  // while (rightGoatIndex === leftGoatIndex) {
  //   rightGoatIndex = Math.floor(Math.random() * Goat.allGoats.length)
  // }
  let rightGoatIndex;
  while (rightGoatIndex === undefined || rightGoatIndex === leftGoatIndex) {
    rightGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
  }

  // lets assign the current left and current right goats based off the index numbers we got ^^^^
  currentLeftGoat = Goat.allGoats[leftGoatIndex];
  currentRightGoat = Goat.allGoats[rightGoatIndex];
}

function renderResults() {
  resultsPannelUlElem.innerHTML = '';
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Goat Likes';
  resultsPannelUlElem.appendChild(h2Elem);
  for (let goat of Goat.allGoats) {
    // Goat.allGoats[i] === goat
    const liElem = document.createElement('li');
    liElem.textContent = `${goat.name} : ${goat.votes}`;
    resultsPannelUlElem.appendChild(liElem);
  }

  // for (let i = 0; i < Goat.allGoats.length; i++) {
  //   let goat = Goat.allGoats[i];
  //   const liElem = document.createElement('li');
  //   liElem.textContent = `${goat.name} : ${goat.votes}`;
  //   resultsPannelUlElem.appendChild(liElem);
  // }
}

function handleClick(e) {
  console.log('I am listening');
  let thingTheyClickedOn = e.target;
  console.log(thingTheyClickedOn);
  // we need to account for votes
  if (voteCounter < 10) {
    if (thingTheyClickedOn === leftGoatImageTag || thingTheyClickedOn === rightGoatImageTag) {
      // count the vote/ increment our vote count
      voteCounter++;
      // add to the goat they clicked ons votes
      if (thingTheyClickedOn === leftGoatImageTag) {
        currentLeftGoat.votes++;
      } else {
        currentRightGoat.votes++;
      }
      // render new
      pickGoats();
      renderTwoGoats(currentLeftGoat, currentRightGoat);
      // alert('you got it')
    } else {
      alert('You really missed the goat!');
    }
  } else {
    goatImageSectionTag.removeEventListener('click', handleClick);
    // alert('This is where we would render our results');
    renderResults();
  }
}

// add a listener and a handler

goatImageSectionTag.addEventListener('click', handleClick)

new Goat('Cruising Goat', './images/cruisin-goat.jpg');

new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Goat Away', './images/goat-away.jpg')
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg')
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sassy Goat', './images/sassy-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');
new Goat('Smiling Goat', './images/smiling-goat.jpg');

pickGoats();
console.log(currentRightGoat)
console.log(currentLeftGoat)
renderTwoGoats(currentLeftGoat, currentRightGoat)