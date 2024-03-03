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

  //an intersectiuon return a new set with common element
  //from existing set and current one
  intersection(nSet) {
    //loop thru the existing set and check if any element
    //exist in current set. If yes then add it to new set
    const inter = new Set();
    this.values.forEach((item) => {
      if (nSet.has(item)) {
        inter.add(item);
      }
    });
    return inter;
  }

  //difference is when item ixist in set A but not in set B;
  difference(setB) {
    const diff = new Set();
    this.values().forEach((item) => {
      if (!setB.has(item)) {
        diff.add(item);
      }
    });
    return diff;
  }

  // subset is when all the element of set A are in setB,
  // then. we say set A is subset of set B
  //use .every to check if all the element of set A exist in seb B
  // this returns true/false
  subSetOf(setB) {
    return this.values().every((element) => {
      setB.values().includes(element);
    });
  }
}

const s = new Set(["a", "b", "c"]);

s.values(); //=> {'a', 'b','c'}
s.union(["c", "d"]); //=> {'a', 'b','c','d'}
