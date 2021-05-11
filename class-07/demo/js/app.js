// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.


// add constructor function to make kittens
function Kitten (name, photo, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
  this.name = name;
  this.photo = photo;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}

Kitten.prototype.setAge = function() {
  console.log(this.age);
  this.age = randomAge(3,12) + ' months';
  console.log(this.age);
}

let kittenFrankie = new Kitten('Frankie', './images/frankie.jpeg', ['sleeping', 'high places', 'lazer lights'], true, false, true);
kittenFrankie.setAge();
console.log(kittenFrankie);

let kittenSerena = new Kitten('Serena', './images/serena.jpeg',['pets', 'scratches', 'hissing'], false, false, false);
kittenSerena.setAge();

let kittenJumper = new Kitten('Jumper', './images/jumper.jpeg',['fish treats', 'bells', 'dogs'], false, true, false )
kittenJumper.setAge();

// const kittenFrankie = {
//   name: 'Frankie',
//   age: null,
//   interests: ['sleeping', 'high places', 'lazer lights'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithCats: true,
//   photo: './images/frankie.jpeg',
//   setAge: function() {
//     console.log(this.age);
//     this.age = randomAge(3,12) + ' months';
//     console.log(this.age);
//   }
// }

// const serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['pets', 'scratches', 'hissing'],
//   isGoodWithOtherCats: false,
//   isGoodWithKids: false,
//   isGoodWithDogs: false,
//   photo: './images/serena.jpeg',
//   setAge: function() {
//     console.log(this.age);
//     this.age = randomAge(3,12) + 'months';
//     console.log(this.age);
//   }
// }

// const jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['treats', 'yarn', 'birds'],
//   isGoodWithOtherCats: true,
//   isGoodWithKids: true,
//   isGoodWithDogs: true,
//   photo: './images/jumper.jpeg',
//   setAge: function() {
//     console.log(this.age);
//     this.age = randomAge(3,12) + 'months';
//     console.log(this.age);
//   }
// }

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// console.log(kittenFrankie.setAge());
// console.log(kittenFrankie);

const kittenDivElem = document.getElementById('kittenProfiles');

function makeKittenArticle(kitten) {
  let name = kitten.name;
  const articleElem = document.createElement('article');
  articleElem.setAttribute('id', name);
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



// write a function to add a table
function addTable(kitten) {
  // grab the article element that matches the cat!
  let name = kitten.name;
  const articleElem = document.getElementById(name);

  // create a table element
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  const tr2Elem = document.createElement('tr');
  tableElem.appendChild(tr2Elem);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Kids'
  trElem.appendChild(th1Elem);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = kitten.isGoodWithKids;
  tr2Elem.appendChild(td1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Dogs'
  trElem.appendChild(th2Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = kitten.isGoodWithDogs;
  tr2Elem.appendChild(td2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Cats'
  trElem.appendChild(th3Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = kitten.isGoodWithOtherCats;
  tr2Elem.appendChild(td3Elem);

}


{/* <table>
            <tr>
              <th>
                Kids
              </th>
              <th>
                Dogs
              </th>
              <th>
                Other Cats
              </th>
            </tr>
            <tr>
              <td>
                true
              </td>
              <td>
                false
              </td>
              <td>
                true
              </td>
            </tr>
          </table> */}

makeKittenArticle(kittenFrankie);
makeKittenArticle(kittenSerena);
makeKittenArticle(kittenJumper);

addTable(kittenFrankie);
addTable(kittenSerena);
addTable(kittenJumper);