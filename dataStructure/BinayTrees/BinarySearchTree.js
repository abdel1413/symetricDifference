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
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      // if (currentNode.data === newNode.data) return null;
      if (value == currentNode.data) return undefined;

      let direction = currentNode > newNode.data ? "left" : "right";

      if (!currentNode[direction]) {
        currentNode[direction] = newNode;
      }
      currentNode = currentNode[direction];
    }
  }

  // to insert to BT:
  //1 create a new Node
  //2 check:
  // a)if the tree root is empty, the assign newly created node to root
  // b) if not empty, then compare the value to be added to the root
  //   - if the value is less than the root, check to see if there is
  //     node to the left of the the root. if not, add the newly create node
  //     as the left property. (this.left == null) this.left = newNode
  //   if there is node to the left, move to the left node
  //   (current = current.left) and repeat these steps
  //  - if the value is greather than the root,
  //   check if there is node to the right side ot the root
  //  add newly created node if there is not
  //(if this.right === null) this.right = newNode
  // if there's node to the right side of the root, then
  //move to the right side of the root by updating the current node
  // (current = current.right) and repeat these steps
  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (value == current.data) return undefined;
      if (value < current.data) {
        if (this.left == null) {
          this.left = newNode;
          return this;
        }
        //update current to go to left side
        current = current.left;
      } else {
        if (this.right == null) {
          this.right = newNode;
          return this;
        }

        //update current to go to right side
        current = current.right;
      }
    }
  }

  //to find a value
  // 1 if no root, search is done and return false
  //2 if there is root:
  //a) check if the value we are looking for is same as the root value
  // b) if not, compare the value to that of root
  //  - if greather than the root value then  check if there is node to
  //the right side. if not, search is over
  // if there is node to the right side then move to that node
  // and repeat these steps  (current = current.right)
  // - if less than the root value, check to see if there is a node
  // to the left side:  if not search is over. if there is, move to
  // to that node and repeat these steps  (current = current.left)
  find(value) {
    let found = false;
    let current = this.root;
    if (this.root == null) return false;

    while (current && !found) {
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }
    console.log(found);
    if (!found) return undefined;
    return found;
  }

  findMin() {
    let current = this.root;
    if (!this.root) return null;
    while (current.left) {
      current = current.left;
    }

    return current.value || null;
  }

  findMax() {
    let current = this.root;
    if (!this.root) return null;
    while (current.right) {
      current = current.right;
    }
    return current.value || null;
  }
}

//Note for BST:
//for Access, Search, Insertion, Deletion,
//tc:Average  is O(logn)
// Worse case O(n)
//space Comp: worse case : O(nlogn)
