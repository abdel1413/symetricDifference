class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  // check if the dictionary has already an element and return true/false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  //return all the values from set
  values() {
    return Object.values(this.dictionary);
  }

  //add value to set if it doens't exist and return true if success
  //or false otherwise
  add(item) {
    if (!this.has(item)) {
      this.dictionary[item] = item;
      //increase the length
      this.length++;

      return true;
    }
    return false;
  }

  remove(item) {
    console.log("this", this);
    if (this.has(item)) {
      delete this.dictionary[item];
      this.length--;
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }

  union(setB) {
    //creat new set whete to add both existing set and current one
    const un = new Set();

    //add all the values from existing dictionary to new set
    this.dictionary.values().forEach((item) => un.add(item));

    //loop tru the current set by calling values methd
    //to add each element to the new set
    setB.values().forEach((el) => un.add(el));
    return un;
  }
}

const s = new Set(["a", "b", "c"]);

s.values(); //=> {'a', 'b','c'}
s.union(["c", "d"]); //=> {'a', 'b','c','d'}
