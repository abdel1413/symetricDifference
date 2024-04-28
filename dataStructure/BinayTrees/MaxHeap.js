class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function MaxHeap() {
  // this.heap = [null]; //nb always start at index 1
  this.heap = []; // nb start at index 0
  //when the first element in array is set to null
  //to find parent node, we do: index/2
  // but if we have value at index 0, then we do (inde -1)/2
  this.parent = function (index) {
    // return Math.floor(index / 2);
    Math.floor((index - 1) / 2);
  };

  // with null value at position 0, we do index*2 to find left child
  //but with an element at post 0, we do (index*2+)1
  this.leftChild = function (index) {
    // return index * 2;
    return index * 2 + 1;
  };
  // with null value at position 0, we do index*2 +1 to find left child
  //but with an element at post 0, we do (index*2) +2
  this.rightChild = function (index) {
    //return index * 2 + 1;
    return index * 2 + 2;
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
    //when element at index 0 is null, we start with 1
    //while(index > 1 && this.heap[index] > this.heap[parrentIndex] ){..}

    //when there is element at index 0, we start with 0
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      //   this.heap[currentIndex] = this.heap[parentIndex];
      //   this.heap[parentIndex] = item;
      //   currentIndex = parentIndex;

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  };

  // 1 : replace the last element from the heap with the root (elt to be delete)
  //2: delete the last element from the root
  // 3: heapify the last element(we just replaced with root)
  //so ti follow the heap preperty
  this.remove = function () {
    this.heap = [...this.heap];
    // set the first element as the  max
    let max = this.heap[0];
    //delete last element
    let last = this.heap.pop();
    // set last element at positiion of max
    this.heap[0] = last;
    // heapifydown the index to preserve the heap property
    this.heapifyDown(0);
    //return max
    return max;
  };

  this.heapifyDown = function (index) {
    let largeIndex = index;
    //get the index of left and right child nodes
    let left = this.leftChild(largeIndex);
    let right = this.rightChild(largeIndex);
    //get the length of heap;
    let length = this.heap.length;

    //if the left child is larger than the element at largeIndex
    //then set the largeIndex to left child
    if (left < length && this.heap[left] > this.heap[largeIndex]) {
      largeIndex = left;
    }

    // if the right child is larger than the element at
    //largeIndex, set right as the largIndex
    if (right < length && this.heap[right] > this.heap[largeIndex]) {
      largeIndex = right;
    }

    // if largeIndex is # of index, swap them
    if (largeIndex != index) {
      // let temp = this.heap[index];
      // this.heap[index] = this.heap[largeIndex]
      // this.heap[largeIndex] = temp;
      this.swap(index, largeIndex);

      //after swap, heapifydown the index to preserve the heap propety
      // by recursively call the method heapifydonw()
      this.heapifyDown(largeIndex);
    }
  };
}
