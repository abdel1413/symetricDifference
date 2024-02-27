const selectionSort = (array) => {
  //create a swapper function that swapes the least
  //and greates element in  array
  const swapper = (index0, index1, array) => {
    let temp = array[index0];
    array[index0] = array[index1];
    array[index1] = temp;
  };
  // set the min to each index in array
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;

    //find the min in the inner loop
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }

      //call swap function
      swapper(i, min, array);
    }
  }

  return array;
};
