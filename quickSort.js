//1)pick the first or last elemnet from array  as the pivot\
//2) create two empty array representing left and right sub array
//3) create a base case that return an array if its length is 1 or 0
//4) loop thru the array while checking each element against the pivot
// a) if the element is < than the pivot, put it into left sub array
// b) otherwise put it into right sub array
// 5) recursively call the function and pass each sub array as argument to sort
//6) return the sorted array that will include left sub array
//pivot and right sub array

function quickSort(array) {
  const pivot = array[0];
  const leftArray = [],
    rightArray = [];
  if (array.length <= 1) {
    return array;
  } else {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        leftArray.push(array[i]);
      } else {
        rightArray[i];
      }
    }
  }

  return [...quickSort(eftArray), pivot, ...quickSort(rightArray)];
}

// O(nlog(n))
