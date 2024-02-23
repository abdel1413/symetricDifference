// in insertion sort, the array is divided into two assumingly
// sorted part with first element and the
//unsorted part is the rest of elts in the array
// outter loop  allows to set the first element as the current
//sorted elt and the inner loop checks that elt against all the rest
// -if the selected elem is smaller than the last elt of sorted array, then
//we shift the sorted element by 1 until we find a spot to insert the
//select elt

const insertionSort = () => {
  //loop to set the first element as the sorted array
  for (let i = 0; i < Array.length; i++) {
    let current = array[i];
    for (var j = i + 1; j >= 0 && array[i] > current; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = current;
  }
  return array;
};

//2nd way

const insertSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currElement = array[i];
    let lastIndex = i - 1;

    while (lastIndex >= 0 && array[lastIndex + 1] > currElement) {
      array[lastIndex + 1] = array[lastIndex];

      lastIndex--;
    }
    array[lastIndex + 1] = currElement;
  }

  return array;
};
