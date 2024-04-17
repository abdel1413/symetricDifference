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
  //create a holper funct that check both left and right child node
  // based on the root node
  //1 the left subtree will contain nodes whose keys are less than root key
  //2 the right subtree will contain nodes whose keys are greather than root key
  //3 left and right subtree will also be binaray tree

  const helper = (node, min, max) => {
    //return true if node doesn't exist
    if (!node) return true;

    //if(node.value <= min || node.value >= max) return false
    //return false if right bound is (node.value) is less than min
    if (node.value <= min) return false;

    // return false if the left bound (node.value) is greathe than max
    if (node.value >= max) return false;

    //return recursive call of helper function
    return (
      helper(node.left, min, node.value) && helper(node.right, node.value, max)
    );
  };
  return helper(tree.root, Number(-Infinity), Number(Infinity));
}
