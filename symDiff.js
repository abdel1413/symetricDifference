function symDiff() {
  const args = [],
    result = [];

  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  //create a function that put element that exist only in one arrays and that do
  //not exist in array2 as well as  in result;

  //  do the same for array2
  const setOfArr = (array1, array2) => {
    array1.forEach((item) => {
      if (array2.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    array2.forEach((item) => {
      if (array1.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    console.log("re", result);
    return result;
  };

  //pass setOfArr as reduce param
  args.reduce(setOfArr);
}

symDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]); //=>[1, 4, 5]
