const bubbleSort = (array) => {
  //declare a tempo and bool vars
  let temp,
    swapped = false;
  //use do wile loop
  do {
    //loop thru array to check each element for swapping
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

bubbleSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);

//use do while and pass bool as arg
// inside while loop, use for loop to swape unsorted element
const sw = (array) => {
  let flag = false;
  do {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        flag = true;
      }
    }
  } while (flag);
  return array;
};
