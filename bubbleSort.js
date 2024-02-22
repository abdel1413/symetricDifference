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
