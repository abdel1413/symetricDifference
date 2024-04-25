class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function MaxHeap() {
  this.hear = [null];

  //when the first element in array is set to null
  //to find parent node, we do: index/2
  // but if we have value at index 0, then we do (inde -1)/2
  this.parent = function (index) {
    return index / 2;
  };

  // with null value at position 0, we do index*2 to find left child
  //but with an element at post 0, we do (index*2+)1
  this.leftChild = function (index) {
    return index * 2;
  };
  // with null value at position 0, we do index*2 +1 to find left child
  //but with an element at post 0, we do (index*2) +2
  this.rightChild = function (index) {
    return index * 2 + 1;
  };

  this.heapifyUp = function (item) {
    let index = this.heap.length - 1;
    while (index > 1 && this.heap[index] > this.heap[this.parent(index)]) {
      this.heap[index] = this.heap[this.parent(index)];
      this.heap[this.parent(index)] = item;
      index = this.parent(index);
    }
  };
}
