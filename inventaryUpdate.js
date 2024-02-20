function update(arr1, arr2) {
  for (let item of arr1) {
    let found = false;
    for (let i of arr2) {
      if (item[1] === i[1]) {
        item[0] += i[0];
        found = true;
        break;
      }
    }
    if (!found) {
      arr1.push([...i]);
    }
    console.log(arr1);
    return arr1.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
