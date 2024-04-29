const Map = function () {
  this.collection = {};

  // has methd return true or false
  this.has = (key) => {
    return this.collection.hasOwnProperty(key);
  };

  //add key and its value
  this.add = (key, value) => {
    this.collection[key] = value;
  };
  //get item based on their key
  this.get = (key) => {
    if (this.has(key)) {
      return this.collection[key];
    } else {
      return undefined;
    }
  };

  // remove this item base on the key
  this.remove = (key) => {
    if (this.has(key)) {
      return delete this.collection[key];
    }
  };
  // return all the elements
  this.values = () => {
    return [...Object.values(this.collection)];
  };

  //get the length or size
  this.size = () => {
    return Object.entries(this.collection);
  };

  //empty the collection
  this.clear = () => {
    this.collection = {};
  };
};

const map = new Map();
map.add("first", "one");

//end

//ES6 Map
//ES6 map has almost same methods as above
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
