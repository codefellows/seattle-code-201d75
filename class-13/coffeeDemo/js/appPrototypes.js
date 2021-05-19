'use strict';

// global variables including the target for our listeners & place I want to appent the orders to
const orderFormElem = document.getElementById('orderForm');
const orderUlElem = document.getElementById('orders');
Coffee.drinks = [];

// constructor funtion
function Coffee(name, size, milk, dt){
  this.name = name;
  this.size = size;  
  this.milk = milk;
  this.dt = dt;
}

Coffee.prototype.renderCoffee = function() {
  const liElem = document.createElement('li');
  orderUlElem.appendChild(liElem);
  const orderInfoPElem = document.createElement('p');
  // Sara ordered a 12oz americano with soy milk.
  orderInfoPElem.textContent = `${this.name} ordered a ${this.size}oz ${this.dt} with ${this.milk} milk.`
  liElem.appendChild(orderInfoPElem);
}

function renderAllOrders() {
  orderUlElem.innerHTML = '';

  // go through my array of drinks and call renderCoffee on each one

  for (let drink of Coffee.drinks) {
    drink.renderCoffee();
  }

}

const makeADrink = function(name, size, milk, dt) {
  let drink = new Coffee(name, size, milk, dt);

  // every time I make a drink it will be put in the array
  Coffee.drinks.push(drink);

  //update storage here!
  updateStorage();
}

// write a function to update storage
function updateStorage() {
  // turn the thing I want to store into a string
  const stringifiedDrinks = JSON.stringify(Coffee.drinks);
  // set the item into storage with a key
  localStorage.setItem('drinks', stringifiedDrinks);
}


// write a function to get things out of storage
function getStuffOut() {
  // request things from storage with our key
  let drinksFromStorage = localStorage.getItem('drinks');
  // if I get stuff back, parse it
  if (drinksFromStorage) {
    let parsedDrinks = JSON.parse(drinksFromStorage);
    console.log(parsedDrinks);
    // reinstantiate it!
    for (let drink of parsedDrinks) {
      makeADrink(drink.name, drink.size, drink.milk, drink.dt);
    }
    // for (let i = 0; i < parsedDrinks.length; i++) {
    //   let drink = parsedDrinks[i];
    //   makeADrink(drink.name, drink.size, drink.milk, drink.dt);
    // }
    // go ahead and render any orders we have from storage
    renderAllOrders();
  } else {
    console.log('You have in storage matching that name')
    makeADrink('sample', 'empty', 'none', 'air');
  }

  // if I have nothing in storage you'll need to make some products to vote on
  // IT WILL NO LONGER BE COFFEE
  // it will be a POJO - plain old javascript object
  // REINSTANTIATE the objects back to coffee objects
}

// function to handle submit
function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const size = e.target.size.value;
  const milk = e.target.milk.value;
  const dt = e.target.drinkType.value;
  makeADrink(name, size, milk, dt);
  renderAllOrders();
}

// attach a listener and handle it!
orderFormElem.addEventListener('submit', handleSubmit)
getStuffOut();


// put something in storage :
// 'key' has to match when get it out!!!
// serialize our data! A way to format data 
// stringify to serialize data
// - `getItem(key)`
// - `setItem(key, value)`
// - `clear()`
// - `removeItem(key)`
