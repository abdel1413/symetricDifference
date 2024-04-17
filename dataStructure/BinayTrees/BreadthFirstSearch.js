class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
//1: create a queue
//2: Enqueue the root node
//3: if queue is not empty
// a- dequeue first node in the queue
// b- read its value/ or push it into an array
//then check if it has lef / right child
// c- enqueue the left chid
//d- enqueue the right child
//
function BreadthFirstSearch() {
  this.root = null;

  this.levelOrder = function () {
    let queue = [];
    queue.push(this.root);
    let array = [];
    while (queue.length) {
      let current = queue.shift();
      array.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return array;
  };
  this.reverseLevelOrder = function () {
    let queue = [],
      array = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      array.push(current.value);
      if (current.right) queue.push(current.right);
      if (current.left) queue.push(current.left);
    }
    return array;
  };
}
