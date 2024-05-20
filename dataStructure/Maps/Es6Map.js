//ES6 Map
//ES6 map has almost same methods  that the regular map does not have
// .set(key, value) to add to map
// .rentries return  array of all keys form map
// .values returns array of all values form map;
//.get(key) return value with itst associated key

const myMap = new Map();
myMap.set("key", "value");

/// NOTE we can't override the type property of Map() as
//we do with Object
//we can't do this:
myMap.size = false; //Map type property can't be overwritten

//But with object  we can override type property
const obj = {};
obj.name = "Smith";
obj.hasOwnProperty("name"); //=> true
obj.hasOwnProperty = true;
obj.hasOwnProperty("name"); // Error: obj.hasOwnProperty is not a function
// THis is bcz object type property .hasOwnProperty  has been overriten;
