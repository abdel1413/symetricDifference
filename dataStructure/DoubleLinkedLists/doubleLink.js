class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

const DoubleLink = function () {
  this.head = null;
  this.tail = null;

  //1:create a new node
  //2: pointe new node to the head;
  //3: point  previous to new node;
  //4: set head to new node
  this.prepend = function (element) {
    const node = new Node(element, null);
    console.log("new node", node);
    //point new node's next link to the head
    node.next = this.head;
    // pointe head's prev link to node
    this.head.prev = node;
    //set head to new node
    this.head = node;
  };

  this.append = function (element) {
    const newNode = new Node(element, null);

    //The pointer next (this.tail.next)for the current node will
    //  point to the new node
    this.tail.next = newNode;

    //The pointer previous of the new node will point to
    //  the previous node (current tail).
    newNode.prev = this.tail;

    //the tail should point to new node
    //The this.tail will point to the new node.
    this.tail = newNode;

    this.length++;
  };

  //add front or back
  //1: create a new node
  // 2:check:
  //a) if head is null then set node to head
  // b)set tait to node as well
  // Otherwise:
  //3: save tail in a temporary var
  // 4: link new node to tempp var (temp.next = node)
  //5: set node to tail

  this.add = function (node) {
    const newNode = new Node(node, null);
    let current = this.head;
    if (current == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.tail;
      tempNode.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  };

  this.isempty = function () {
    if (!this.head) return true;
    return false;
  };

  this.display = function () {
    if (!this.isempty()) {
      let curr = this.head;
      while (curr.next !== null) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  };

  this.remove = function (element) {
    if (this.isempty) {
      return null;
    }

    //if element is at the end, remove and update next to null
    if (this.tail.data == element) {
      //get the node before the last node and set it to prevNode var;
      let prevNode = this.tail.prev;
      //set the tail to the node before the last node ;
      this.tail = prevNode;
      //set  the tail's next pointer to null;
      this.tail.next = null;
      return;
    }

    // loop thru the list and to find the matching node
    // reference the next node to the previous node
    //update the node with proper .prev
    let current = this.head;
    while (current.next) {
      if (current.data === element) {
        let removedNode = current;
        //get the previous node
        let prevNode = current.prev;
        //get the next node;
        let nextNode = current.next;
        if (this.head.data === removedNode.data) {
          this.head = nextNode;
          this.head.prev = null;
          break;
        }

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }

      current = current.next;
    }
  };
};
