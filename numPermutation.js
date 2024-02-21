const numPermutation = (numArray) => {
  const result = [];

  const swapper = (array, index0, index1) => {
    let temp = array[index0];
    array[index0] = array[index1];
    array[index1] = temp;
  };

  const generate = (int, heapArr) => {
    //base case
    if (int === 1) {
      result.push(heapArr.slice());
      return;
    }

    //call function recursively while reducing int by 1
    generate(int - 1, heapArr);

    //loop thru the array and call swap at each index
    //if even, swape with i else swape with 0
    for (let i = 0; i < int - 1; i++) {
      //   int % 2 == 0
      //     ? swapper(heapArr, i, int - 1)
      //     : swapper(heapArr, 0, int - 1);
      if (int % 2 === 0) {
        swapper(heapArr, i, int - 1);
      } else {
        swapper(heapArr, 0, int - 1);
      }
      generate(int - 1, heapArr);
    }

    generate(numArray.length, numArray.slice());
    console.log("result");
    return result;
  };
};

console.log(numPermutation([1, 2]));
