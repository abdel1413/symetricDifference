//1)find the middle index
// 2)compare the middle index against the target
// a) if middle is > target: search value on the left half
// b) if middle < target: search value on the right half
// 3) if after searching the whole array and no match found, return false

function binarySearch(array, target) {
  const arrayPath = [];
  let left = 0;
  let right = array.length - 1;

  const middle = Math.floor(right / 2);

  while (array[middle] !== target) {
    arrayPath.push(array[middle]);
    if (right < left) {
      return "Value Not Found";
    }
    if (array[middle] > target) {
      right = middle - 1;
      middle = Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = Math.floor((right - left) / 2);
    }
  }

  arrayPath.push(array[middle]);
  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

binarySearch(testArray, 0);

//O(log(n))  very efficient

// EXECUTION:
// left = 0
//right = 24
//middle = 12
// [14]
// is 14 > 0 ? yes, so update right
//-  right = 12 -1 = 11
// middle = 11-0/ 2 = 5
// [14,5,]
// is 5> 0 ? yes, so  update right
// right = middle -1 => 5-1 = 4
//middle = math.floor((4-0)/2) = 2
// [14,5,2]
// is 2 > 0 yes, so update right
// right = middle -1 => 2-1 = 1
// middle = math.floor((1-0)/2) = 0
//[14,5,2,0]
// is 0> 0 no,
//is 0 < 0 no
// then exist and return our result array which is [14,5,2,0]
