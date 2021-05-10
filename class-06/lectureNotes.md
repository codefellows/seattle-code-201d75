# Lecture Notes

## const
### what?
- a way to declare variables whose value will never change
- a constant valued variable

### why?
- because it never can never be changed this prevents errors and tells a better story with our code
``` javascript
const newVariable = 'unchanging';
```

## template literals!
- a new way for us to write a string without having to concatonate
- wrap the string in backticks and wrap expressions/variables in ${}

``` js
`Here is my string, with a variable of ${newVariable}`
```

## fonts
### serif
### sans-serif
### Custom google fonts

## OBJECTS!
- What are they? 
- "something that we can describe"
- "model real life objects"
- troy has an "object" 
- "give objects properties and methods"

- JS objects are convenient and powerful ways to group data and functions (attributes and behavior, aka adjectives and verbs)
- They store data as properties, which are represented as key: value pairs, and can have methods, which are functions associated with the object.

- arrays are a type of object *without* key names- they do have keys, the keys are the index positions

``` js
const myArray = ['a', 'b', 'c'];

const myObject = {
  0: 'a',
  1: 'b',
  2: 'c'
}

```

### Prototypes
- Every object has a prototype. It can be assigned explicitly, or is set to the global Object by default
- All objects have the props & methods of their prototype
- If a prop or method can't be found on the object itself, the JS engine will look up the prototype chain for it

`let cat = 'My Cat'`
`cat.lowerCase()`


### Contextual this
- complicated!
- changes based on context.
- 'this' refers to the object

## Adding Something to the DOM

### The DOM
"The DOM" (Document Object Model) is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object.

Here is a quick exercise to prove this point:

type document in the console within your browser
find document.body
actually type in document.body
change the document.body.textContext = 'to something else'
look at all the options on the document. dot notation.
Within the document object, we have a method in there called getElementById. This allows us to "get a specific element within the HTML by specifying the id"

We can only add ONE THING AT A TIME.

As an example, let's add a <p> to an existing <div>

This is our existing HTML:

<div id="parentElement">
</div>
Steps
Make a JavaScript reference (a variable) to the parent element
`let something = document.getElementById('parentElement');`
Create the child element we want to add and save it as a variable
`let myChild = document.createElement('p');`
Give the child content - in this case, the content is text
`mychild.textContent = 'Hi!'`
Append the child to the parent
`something.appendChild(myChild)`
JavaScript:

const parent = document.getElementById('parentElement');  
const child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
Finished HTML:

<div id="parent">
  <p>Some words we want in our p element</p>
</div>
