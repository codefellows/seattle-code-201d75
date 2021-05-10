'use strict';

// Jose is a volunteer for Seattle Kitten Rescue. He has some level of comfort with a browser and copying/pasting/saving/uploading/etc. He navigates to the enter a kitten form and enters the above info in a form box. When he clicks the "submit" button, the kitten's profile is displayed on the page.
// - for today we won't have a form, hard code some kittens today, add form later

// what do we need to know?
// name
// age
// interests
// isGoodWithKids
// isGoodithDogs
// isGoodWithCatsW
// how do I know their age? for today we will get a random age

const kittenFrankie = {
  name: 'Frankie',
  age: null,
  interests: ['sleeping', 'high places', 'lazer lights'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  photo: './images/frankie.jpeg',
  setAge: function() {
    console.log(this.age);
    this.age = randomAge(3,12) + ' months';
    console.log(this.age);
  }
}

const serena = {
  name: 'Serena',
  age: 0,
  interests: ['pets', 'scratches', 'hissing'],
  isGoodWithOtherCats: false,
  isGoodWithKids: false,
  isGoodWithDogs: false,
  photo: './images/serena.jpeg',
  setAge: function() {
    console.log(this.age);
    this.age = randomAge(3,12) + 'months';
    console.log(this.age);
  }
}

const jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['treats', 'yarn', 'birds'],
  isGoodWithOtherCats: true,
  isGoodWithKids: true,
  isGoodWithDogs: true,
  photo: './images/jumper.jpeg',
  setAge: function() {
    console.log(this.age);
    this.age = randomAge(3,12) + 'months';
    console.log(this.age);
  }
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// console.log(kittenFrankie.setAge());
// console.log(kittenFrankie);

const kittenDivElem = document.getElementById('kittenProfiles');

function makeKittenArticle(kitten) {
  const articleElem = document.createElement('article');
  kittenDivElem.appendChild(articleElem);

  // make image element and add the link src
  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', kitten.photo)
  articleElem.appendChild(imgElem);

  // make h2 element
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = kitten.name;
  articleElem.appendChild(h2Elem);

  // set kitten age
  kitten.setAge();
  // make a p tag
  const pElem = document.createElement('p');
  pElem.textContent = `age: ${kitten.age}`;
  articleElem.appendChild(pElem);
  console.log(kittenDivElem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < kitten.interests.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = kitten.interests[i];
    ulElem.appendChild(liElem);
  }
}

makeKittenArticle(kittenFrankie);
makeKittenArticle(serena);
makeKittenArticle(jumper);




// <!-- generate this from js: -->
// <!-- <article>
//   <h2>Frankie</h2>
//   <p>3 year old tabby</p>
//   <ul>
//     <li>likes strings</li>
//     <li>doesn't like objects</li>
//   </ul>
//   <img src='./images/frankie.jpeg'>
// </article> -->