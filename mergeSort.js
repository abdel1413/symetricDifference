// 1)check length of array if 1 return array
// 2) else
//a ) get the midle index
//b) copy array from 0 index upto middle index into variable
//c) copy the rest into another variable
//d) return the helper function and pass recursively those two vars
// as params.

//3) create a helper funcion that take two sub array
//a) create an empty array where to push items from least to greather
//b) compare both arrays
// - if 1st elt in arr1 is < that of arr2,
//remove / and put the first elt from arr1 into created array
//- if 1st elt from arr1 is greater then remove
//and pusht 1st item arr2 into created array
//- otherwise push 1st items from both sub array into created array
// 3) return  all of those 3  arrays (created, arr1,arr2) spreaded
//

function mergeSort(array) {
  if (array.length) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return helper(mergeSort(left), mergeSort(right));
  }

  function helper(arr1, arr2) {
    const mergedElements = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        mergedElements.push(arr1.shift());
      } else if (arr1[0] > arr2[0]) {
        mergedElements.push(arr2.shift());
      } else {
        mergedElements.push(arr1.shift(), arr2.shift());
      }
    }
    return [...mergedElements, ...arr1, ...arr2];
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
