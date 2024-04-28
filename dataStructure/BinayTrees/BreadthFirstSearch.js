class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
//1: create a empty queue and  push root node into it
// 2: create an empty array
//2: Enqueue the root node
//3: if queue is not empty
// a- dequeue first node in the queue
// b- read its value/ or push it into an array
//then check if it has lef / right child
// c- enqueue the left chid
//d- enqueue the right child
// 4: return array
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

//TC:  O(V+E) V: vertices/Node E: edges/branches
