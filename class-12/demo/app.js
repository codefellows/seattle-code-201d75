// Global Variables
const results = document.getElementById('goat-clicks');
const bothGoats = document.getElementById('all_goats')
const rightGoatImg = document.getElementById('right_goat_img');
const leftGoatImg = document.getElementById('left_goat_img');
const leftGoatPElem = document.getElementById('left_goat_p');
const rightGoatPElem = document.getElementById('right_goat_p');

let totalClicks = 0;

let leftGoat = null;
let rightGoat = null;
// old goats - olde ghost
// let previousLeft = null;
// let previousRight = null; 


const GoatPictures = function(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.clicks = 0;
  this.timesShown = 0;

  GoatPictures.allImages.push(this);
}
// const goatArray = [];
GoatPictures.allImages = [];
// adding a property to the GoatPictures object that is an array

// write a function that renders goats
const renderGoats = function() {
  // use the right and left global variables for the image and the p tag to stick the goats on the page
  leftGoatImg.src = leftGoat.imagePath;
  rightGoatImg.src  = rightGoat.imagePath;
  rightGoatPElem.textContent = rightGoat.name;
  leftGoatPElem.textContent = leftGoat.name;
}

// write a function that pickss the two different goats
function goatPicker() {

  // alternate solution is to shuffle your whole array 
  // it could be more efficient

   // write a function that picks one goat at random, and then another, making sure the first and the second goat are not the same
   // update this code to make sure we don't end up with previously chosen goats
   const doNotUse = [];
   doNotUse.push(leftGoat);
   doNotUse.push(rightGoat);
   // create a new index number for the left goat... if the left goat is one of the previous goats choose a new index number
   // it has a run time the length of my array 
   // itterates through every value of the array checking for equality - if it finds a match it breaks and returns true, otherwise it returns false
   while(doNotUse.includes(leftGoat)) {
    let leftIndex = Math.floor(Math.random() * GoatPictures.allImages.length);
    leftGoat = GoatPictures.allImages[leftIndex];
    // this will keep looping until we get a goat we haven't seen. 
   }
   // Once we have a new unique goat we can add that goat to the array
   doNotUse.push(leftGoat);
   // repeat with the right goat
   while(doNotUse.includes(rightGoat)) {
    let rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length);
    rightGoat = GoatPictures.allImages[rightIndex];
    // this will keep looping until we get a goat we haven't seen. 
   }
}

function displayVoteCount() {
  // remove current input and replace
  results.innerHTML = ' ';
  let h2Elem = document.createElement('h2')
  h2Elem.textContent = 'Goat Likes'
  results.appendChild(h2Elem);
  for (let goat of GoatPictures.allImages) {
    const liElem = document.createElement('li');
    liElem.textContent = `${goat.name}: ${goat.clicks}`;
    results.appendChild(liElem);
  }
  // for (let i = 0; i < GoatPictures.allImages.length; i++) {
  //   const liElem = document.createElement('li');
  //   let goat = GoatPictures.allImages[i];
  //   liElem.textContent = `${goat.name}: ${goat.clicks}`;
  //   results.appendChild(liElem);
  // }
}

// add a goat chart
// get the element associated with the 'goatChart'
// create our context using that and '2d'
// create a new chart
// need to figure out colors
// need to have an array of data
// need labels
const makeAGoatChart = function() {
  const goatChart = document.getElementById('goatChart').getContext('2d');
  // make an array for data
  // make an array of labels
  const goatData = [];
  const goatLabels = [];
  // iterate through GoatPictures.allImages and grab the properties name and votes/clicks
  // forEach
  for (let goat of GoatPictures.allImages) {
    // goat = GoatPictures.allImages[i]
    goatData.push(goat.clicks);
    goatLabels.push(goat.name);
  }
  // for (let i = GoatPictures.allImages.length -1; i <= 0; i--) {
  //   let goat = GoatPictures.allImages[i]
  //   goatData.push(goat.clicks);
  //   goatLabels.push(goat.name);
  // }

  // make an array of labelColors
  const colors = [];
  for (let i = 0; i < GoatPictures.allImages.length; i++) {
    if (i % 2 === 0) {
      colors.push('rgb(255, 99, 132)');
    } else {
      colors.push('rgb(0,0,0)');
    }
  }

  const myChart = new Chart(goatChart, {
    type: 'bar',
    data: {
      labels: goatLabels,
      datasets: [{
        label: '# of Votes',
        data: goatData,
        backgroundColor: colors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

}


// handle the result of the click
function handleClick(event) {
  console.log(event.target);
  const clickedTarget = event.target;
  const id = clickedTarget.id;
  // we need a way to compare the left goat and right goat to what we clicked on to make sure we count the vote 
  // if they vote 10 times or less do this 
  if (totalClicks < 10) {
    if (id === 'left_goat_img' || id === 'right_goat_img') {
      // increment votes total
      // increment the particular goat we clicked on votes
      if (id === 'left_goat_img') {
        leftGoat.clicks++;
      } else {
        rightGoat.clicks++;
      }
      totalClicks++;
      leftGoat.timesShown++;
      rightGoat.timesShown++;
      goatPicker();
      renderGoats();
    }
  }
  if (totalClicks === 10) {
    bothGoats.removeEventListener('click', handleClick);
    // render our results
    displayVoteCount();
    // add chart
    makeAGoatChart();
  }
  // if they vote more than ten times turn it off!
}


new GoatPictures('Cruising Goat', './images/cruisin-goat.jpg');
new GoatPictures('Float Your Goat', './images/float-your-goat.jpg');
new GoatPictures('Goat Away', './images/goat-away.jpg')
new GoatPictures('Goat Out of Hand', './images/goat-out-of-hand.jpg')
new GoatPictures('Kissing Goat', './images/kissing-goat.jpg');
new GoatPictures('Sassy Goat', './images/sassy-goat.jpg');
new GoatPictures('Sweater Goat', './images/sweater-goat.jpg');
new GoatPictures('Smiling Goat', './images/smiling-goat.jpg');

// add a listener
bothGoats.addEventListener('click', handleClick)

goatPicker();
console.log('left goat', leftGoat);
console.log('Right Goat', rightGoat);
renderGoats();