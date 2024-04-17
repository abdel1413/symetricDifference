class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

//to find the min depth
// 1 check if the node is empty to return -1
//2 : otherwise use recursive calls
//  a) find the depth on left subtree and save it in a var
//  b) find the depth on right subtree and sae it in onather var
//   - add 1 tothe left depth var and return if it is less than the second
//   - otherwise add 1 to right depth and  return

function MinMaxHeight() {
  this.root = null;

  this.add = function (data) {
    let newNode = new Node(data);
    console.log(newNode);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (data === current.value) return undefined;
      if (data < current.value) {
        if (this.left == null) {
          this.left = newNode;
        }
        current = current.left;
      } else {
        if (data > current.value) {
          if (this.right == null) {
            this.right = newNode;
          }
          current = current.right;
        }
      }
    }
  };
  this.findeMinHeight = function (node = this.root) {
    if (!node) return -1;
    let leftDepth = this.findeMinHeight(node.left);
    let rightDepth = this.findeMinHeight(node.right);
    console.log("left", leftDepth, "right", rightDepth);
    if (leftDepth < rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  };

  //  similar to above algo
  // this time check if left is greather than right
  // if yes, then add 1 to left depth and return
  // otherwise add 1 to right depth and return
  this.findMaxHeight = function (node = this.root) {
    if (!node) return -1;
    let leftDepth = this.findMaxHeight(node.left);
    let rightDepth = this.findMaxHeight(node.right);
    console.log("lef", leftDepth, "right", rightDepth);

    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  };

  this.isBalanced = function () {
    // return this.findeMinHeight() == this.findMaxHeight()
    return this.findeMinHeight() >= this.findMaxHeight() - 1;
  };
}
