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
    return Object.entries(this.collection).length;
  };

  //empty the collection
  this.clear = () => {
    this.collection = {};
  };
};

const map = new Map();
map.add("first", "one");

//end
