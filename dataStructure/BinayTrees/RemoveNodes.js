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
  };
}
