function updateInventory(arr1, arr2) {
  let resultArray = [];
  if (arr1.length == 0) {
    resultArray = [...arr2];
  }
  if (arr2.length == 0) {
    resultArray = [...arr1];
  }
  arr1.map((i) => {
    for (let a2 = 0; a2 < arr2.length; a2++) {
      if (i[1] == arr2[a2][1]) {
        i[0] = i[0] + arr2[a2][0];
        arr2.splice(a2, 1);
      }
      resultArray = [...arr1, ...arr2];
    }
  });
  resultArray.sort((a, b) => {
    return a[1] > b[1] ? 1 : a[1] === b[1] ? 0 : -1;
  });
  return resultArray;
}
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];
var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

let c = updateInventory(curInv, newInv);
console.log(c);
