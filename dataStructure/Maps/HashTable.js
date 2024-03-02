//create a function
let called = 0;
const hash = (string) => {
  called++;
  var hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

const HashTable = function () {
  this.collection = {};

  //add key value to hashtable but before we do that
  // let pass string to hash function
  this.add = (key, value) => {
    let hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[kashedKey] = value;
  };

  //a look up method
  this.lookup = (key) => {
    const hashedKey = key;
    return this.collection[hashedKey][key];
  };

  //remove base on the key
  this.remove = (key) => {
    const hashedKey = key;
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0) {
      delete this.collection[hashedKey];
    }
  };
};
