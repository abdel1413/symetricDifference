class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === newNode.data) return null;
      let direction = currentNode > newNode.data ? "left" : "right";

      if (!currentNode[direction]) {
        currentNode[direction] = newNode;
      }
      currentNode = currentNode[direction];
    }
  }
}
