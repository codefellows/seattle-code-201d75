# Lecture Notes

## Persistance of Data 
### what??
- the ability to store data to be accessed at a later point
- databases (301)
- localStorage
  - locally based (only specific to your computer) storage
  - an object in our browser specific to YOUR computer that can store data in it's properties
    - technically stored in a file on your computer in your Chrome application files

### why?
- So that a user is able to retain data accross page refreshes and on different parts of the application

## JSON
- https://www.json.org/json-en.html
- javascript object notation
- stringify and parse
- stringify means turn it all into strings
- parse means turn it back into a regular object our program can read

## Local Storage
### How data is stored
- you can set string data into storage as a key: value pair
- to stringify objects and arrays use `JSON.stringify()`

to get them out and make them usable we will use:
- JSON.parse();

### Methods on Local Storage
- `getItem(key)`
- `setItem(key, value)`
- `clear()`
- `removeItem(key)`

