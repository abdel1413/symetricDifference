function checkSect() {
  const set = new Set();
  const items = [1, 2, 3, "Taco", "Cat", "Awesome"];
  items.forEach((item) => {
    //call add method to add item in set
    set.add(item);
  });

  // remove method in set : .delete() take one arg
  set.delete(2); //=> 1,3,'Taco',"Cat","Awesome"
  set.delete(3); //  1,'Taco',"Cat","Awesome"

  return set;
}

// set has has() and size method
const checkValue = (set, value) => {
  if (set.has(value)) {
    return [true, set.size];
  } else {
    return [false, set.size];
  }
};

//we can also use spread operator on set to return all element
//in set as an array
const setToArray = (set) => {
  return [...set]; // return an array containing all the items of set
};

let check = checkSect();
console.log(check); //=>[ 1, 2, 3, 'Taco', 'Cat', 'Awesome' ]
