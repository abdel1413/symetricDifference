class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// to solve the invert problem:
//1: recursively call left subtree
//2: recursively call right subtree
//3: swap left and right child
//4: return root

function InvertTB() {
  this.root = null;

  this.invert = function (node = this.root) {
    if (!node) return null;
    //recursively call lef and right nodes
    // let left = this.invert(node.left);
    // let right = this.invert(node.right);
    // //swap left and right pointers
    // node.left = right;
    // node.right = left
    // return node;

    // or swap then use recursive call
    [node.left, node.right] = [node.right, node.left];
    this.invert(node.left);
    this.rnvert(node.right);
  };
}
