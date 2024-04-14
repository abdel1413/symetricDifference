class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ValidBST {
  constructor() {
    this.root = null;
  }
}

function isBinarySearchTree(tree) {
  const helper = (node, min, max) => {
    if (!node) return true;
    //if(node.value <= min || node.value >= max) return false
    if (node.value <= min) return false;
    if (node.value >= max) return false;

    return (
      helper(node.left, min, node.value) && helper(node.right, node.value, max)
    );
  };
  return helper(tree.root, Number(-Infinity), Number(Infinity));
}
