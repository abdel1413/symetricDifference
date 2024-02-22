const sumIndeice = (arr, arg) => {
  // create an empty array where to push index
  const indiceArray = [];

  if (!arr.length) {
    return 0;
  } else {
    //chech for every pair
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (
          arr[i] + arr[j] == arg &&
          !indiceArray.includes(i) &&
          !indiceArray.includes(j)
        ) {
          indiceArray.push(i, j);
          break;
        }
      }
    }
  }

  //return  the sum of indice from indiceArray
  return indiceArray.reduce((sum, curr, index) => sum + curr, 0);
};
