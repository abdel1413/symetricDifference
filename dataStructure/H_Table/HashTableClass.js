//1: create hashtable class with initital table of 127 buckets
//and set the size to zero (0)

// 2: create a private hash(key, value) method that transform
//key into index using ASCII .charCodeAt(i) method

//3: set(key, value) we call _hash(key) and set it to a var
//then we use that var var to assign to the [key, value]
// then increment the size

//4: get(key)assign _hash(key)  to a var
// then use it to retrieve a value associated with the index

//5: remove(key) call hash(key) and assign to a var then
//check if the value associated with that var exist in table and if
// has length > 0
// if so, then set that value to undefined and decrement the size by 1
// return true otherwise return false;

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i);
    }
    //return hashedKey //=> 0-127
    // to avoid that hashedKey returns num btw 0-127
    //that may exceed the bucket size, we use modulo
    // operator to the table length
    return hashedKey % this.table.length;
  }

  //Not to avoid index collision,
  // .need to create a second array
  //.check if table[index] exist then
  //.loop thru the array
  // if the key of one of the array is == to the key param,
  // replace the value at index 1 and stop any further execution
  //if no key is found then push a new array of key and value to the
  //second array;
  //Else, initialise a new array and push key/value pairs
  //at the specific index
  //Increment size anytime the push method is called

  set(key, value) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        //find key/value pair in the chain
        if (this.table[index][i][0] == key) {
          this.table[index][i][1] = value;
          return;
        }
      }

      //not found, then push key/value pair
      this.table[index].push([key, value]);
    } else {
      //initialize a new array
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  ////
  //   set(key, value) {
  //     const index = this._hash(key);
  //     if (this.table[index]) {
  //       for (let i = 0; i < this.table[index].length; i++) {
  //         // Find the key/value pair in the chain
  //         if (this.table[index][i][0] === key) {
  //           this.table[index][i][1] = value;
  //           return;
  //         }
  //       }
  //       // not found, push a new key/value pair
  //       this.table[index].push([key, value]);
  //     } else {
  //       this.table[index] = [];
  //       this.table[index].push([key, value]);
  //     }
  //     this.size++;
  //   }
  ///

  get(key) {
    let index = this._hash(key);
    return this.table[index];
  }

  remove(key) {
    let index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

const ht = new HashTable();
ht.set("spain", "33333");
ht.set("new york", "4444");
ht.set("nj", "5555");
ht.get("nj");
ht.set("bx", "443"); //if we console.log(ht.get('ft')), and get the same value
// as ht.get('bx'): this means we have index collision
//as fx and bx have the same index in ASCII
