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
  this.length = 0;

  //1:create a new node
  //2: pointe new node to the head;
  //3: point  previous to new node;
  //4: set head to new node
  this.prepend = function (element) {
    const node = new Node(element, null);

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
    let data = [];
    if (!this.isempty()) {
      let curr = this.head;
      while (curr !== null) {
        console.log(curr.data);
        data.push(curr.data);
        curr = curr.next;
      }
    }
    return data;
  };

  this.remove = function (element) {
    if (this.head == null) {
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
      return this.head;
    }

    // loop thru the list and to find the matching node
    // reference the next node to the previous node
    //update the node with proper .prev
    let current = this.head;
    let removedNode;
    while (current.next) {
      if (current.data === element) {
        removedNode = current;
        //get the previous node
        let prevNode = current.prev;
        //get the next node;
        let nextNode = current.next;
        if (this.head.data === element) {
          this.head = current.next;
          this.head.prev = null;
        } else {
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
      }

      current = current.next;
    }
    return "successfully remove" + removedNode;
  };

  this.removeStart = function () {
    if (this.head == null) {
      console.log("Sorry The list is empty");
      return null;
    }

    let current = this.head;
    //move head pointer to one step
    this.head = current.next;
    //set the prev pointer to null
    current.prev = null;
    let deleted = current.data;
    current.data = null;
    console.log(`${deleted} is successfully deleted from the list`);
  };

  this.deleteEnd = function () {
    if (this.head == null) return "Sorry, this list is empty";

    //assign tail node as current value
    let current = this.tail;

    // assing prev value of last node(tail node) to variable
    let preveiousNode = this.tail.prev;
    console.log("prev", preveiousNode);
    // now shift tail pointer one step backward
    this.tail = preveiousNode;
    // save tail data to variable
    console.log("thistail", this.tail);
    let deleted = current.data;
    //set tail's next pionter to null
    this.tail.next = null;
    //set currend node to null to clear it from memory
    current = null;
    console.log(`${deleted} is successfully deleted`);
  };

  this.removeAt = function (pos) {
    if (!this.head) return "Sorry, the list is empty";

    //check if the pos is 0, call deleteStart mthd
    if (pos == 0) {
      return this.removeStart();
    }

    let current = this.head;
    while (pos > 0) {
      pos -= 1;
      if (current == null) {
        console.log(
          "Incorrect position! this index does not exist in the list"
        );
      }
      current = current.next;
    }
    if (current == this.tail) {
      return this.deleteEnd();
    }

    let preveiousNode = current.prev;
    let nextNode = current.next;
    console.log("prev", preveiousNode);
    preveiousNode.next = nextNode;
    nextNode.prev = preveiousNode;
    let deleted = current.data;
    current = null;
    console.log(`${deleted} is successfully deleted from the list`);
  };
};
