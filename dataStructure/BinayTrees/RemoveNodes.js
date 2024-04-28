class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

//we have 3 senarios to remove a node from tree
// 1- node with no childring(!left & !right)
// 2- node with only one child(left/right)
// 3- node with two children (left & right)

function RemoveNodes() {
  this.root = null;

  //case 1 remove leaf
  this.removeLeaves = function (data) {
    if (!this.root) return null;

    //create a var to hold the current node
    let currentNode = this.root;
    let parent;
    while (currentNode && currentNode.value != data) {
      parent = currentNode;

      if (data < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!currentNode) return null;

    //if root has no child, deleting it should set root to null
    if (!parent) {
      this.root = null;
    } else {
      // if (parent.left == currentNode) {
      //     parent.left = null;
      // } else {
      //     parent.right = null
      // }
      const direction = parent.left === currentNode ? "left" : "right";
      parent[direction] = null;
    }
  };

  this.removeNodeWithChild = function (data) {
    if (!this.root) return null;
    let parent;
    let current = this.root;
    while (current && current.value != data) {
      parent = current;

      //create child
      const children =
        (current.left != null ? 1 : 0) + (current.right != null ? 1 : 0);

      //1st way
      let child = null;
      if (children == 1) {
        if (current.left != null) {
          child = current.left;
        } else {
          child = current.right;
        }

        if (!parent) {
          if (current == parent.left) {
            parent.left = child;
          } else {
            parent.right = child;
          }
        }
      }
      //2nd way
      const child = current.right ? current.right : current.left;
      if (!parent) {
        this.root = child;
      } else {
        const dir = parent.left == current ? "left" : "right";
        parent[dir] = child;
      }
    }

    // 3rd senario
    // find the inorder succession node
    //ie the node with min value in the right subtree
    //of node to be deleted
    // replace that node with min value with the target node
    // set that node with min value to null to delete it
    let min = function (target) {
      if (!target) return null;
      while (target.left) {
        target = target.left;
      }
      return target.value;
    };
    //swap the min from right subtree with the node to be deleted
    currentNode.value = min(currentNode);

    //set the min value obtained to null
    currentNode.left.value = null;
    // currentNoce.value = null
  };
}

// II   all the 3 senaria in one

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function (value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    else {
      let successor = function (root) {
        if (!root) {
          return null;
        }
        while (root.left) {
          root = root.left;
        }
        return root.value;
      };

      target.value = successor(target);
      target.left.value = null;
    }
  };
}
