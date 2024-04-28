const isSorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
    return true;
  }
};

//generate random array
const randomArray = (size = 5) => {
  let arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  return arr;
};

function MinHeap() {
  this.heap = [];

  this.parent = function (index) {
    return Math.floor((index - 1) / 2);
  };
  this.leftChild = function (index) {
    return index * 2 + 1;
  };
  this.rightChild = function (index) {
    return index * 2 + 2;
  };
  this.heapLength = function () {
    return this.heap.length;
  };
  //to insert into heap
  //1: push element into the last position;
  //2: compare the new added element with its parent node:
  //a- if the parent is greather than the newly added element swap them
  //3: repeat the step a until the newly element get into the correct position
  // or until it reaches the root
  //  4: heapify the newly added element so it follow the heap property;
  this.insert = function (item) {
    this.heap.push(item);
    let last = this.heapLength();
    this.heapifyUp(last);
    let parentIndex = this.parent(last);
    while (last > 0 && this.heap[parentIndex] > this.heap[last]) {
      this.swap(parentIndex, last);
      last = parentIndex;
      parentIndex = this.parent(last);
    }
  };

  this.swap = function (index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  };

  this.heapifyUp = function (index) {
    let currentIndex = index;

    let parentIndex = this.parent(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  };

  // 1: get the first element form heap and the last one
  // 2: swap them;
  // 3: delete the leaf/child/ last element form heap
  // 4: heapify the last element;
  this.delete = function () {
    let first = this.heap[0];
    let last = this.heap.length - 1;
    this.heap[0] = last;
    this.heap.pop();
    this.heapifyDown(0);
    return first;
  };

  this.heapifyDown = function (index) {
    let current = index;
    let left = this.leftChild(current);
    let right = this.rightChild(current);
    if (left < this.heapLength() && this.heap[left] < this.heap[current]) {
      current = left;
    }
    if (right < this.heapLengh() && this.heap[right] < this.heap[current]) {
      current = right;
    }

    if (current != index) {
      this.swap(index, current);
      this.heapifyDown(current);
    }
  };

  // sort the heap by pushing the returned values from delete method;
  this.sort = function () {
    let arr = [];
    for (let i = 0; i < this.heapifyDown.length - 1; i++) {
      //push value returned from delete method;
      arr.push(this.delete());
    }
  };
  return arr;
}
