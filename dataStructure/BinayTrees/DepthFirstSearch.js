class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

//note In DFS, we explore a given subtree as deeply as possible
//before continuing search on to the other subtree.
function DepthFirsSearch() {
  this.root = null;

  //1: return null if empty
  // 2: create a recursive function
  // a) recursively call function and pass in the left side node
  // b) push parent node value into a created array if not empty
  // c) recursively call function and pass in the right side node
  //3: return the array
  // 4: recursively call function passing the root as param
  this.inOrder = function (root) {
    if (!this.root) return null;
    let array = [];
    const traversing = (node = this.root) => {
      // I:
      if (!node) return [];
      if (node.left) traversing(node.left);
      array.push(node.value);
      if (node.right) traversing(node.right);
      return array;

      // II:
      // const array = traversing(node.left) // left nodes
      // array.pursh(node.value) // parent node value
      // array.push(...traversing(node.right)) // right nodes
      //return array
    };
    traversing(root);
    return array;
  };

  //1: return null if empty
  // 2: create a recursive function
  // a) push parent node value into a created array if not empty
  // b) recursively call function and pass in the left side node
  // c) recursively call function and pass in the right side node
  //3: return the array
  // 4: recursively call function passing the root as param
  this.preOrder = function (root) {
    if (!this.root) return null;
    let array = [];
    const traversing = (node = this.root) => {
      if (!node) return [];
      array.push(node.value);
      if (node.left) traversing(node.left);
      if (node.right) traversing(node.right);
      return array;

      // II:
      //const array = [node.value] // parent node value
      //  array.push(traversing(node.left)) // left nodes
      // array.push(...traversing(node.right)) // right nodes
      //return array
    };

    traversing(root);
    return array;
  };

  //1: return null if empty
  // 2: create a recursive function
  // a) recursively call function and pass in the left side node
  // b) recursively call function and pass in the right side node
  // c) push parent value into a created array if not empty
  //3: return the array
  // 4: recursively call function passing the root as param
  this.postOrder = function (root) {
    if (!this.root) return null;
    let array = [];
    const traversing = (node = this.root) => {
      if (!node) return [];

      if (node.left) traversing(node.left);
      if (node.right) traversing(node.right);
      array.push(node);

      return array;

      //II:
      //const array = traversing(node.left)
      // array.push(...traversing(node.right))
      // array.push(node.value)
      //return array;
    };
    traversing(root);

    return array;
  };
}

let root = [1, 3, 4, 5, 6, 7, 8];
let t = new TreeTraversal();

//TC: O(V + E)
