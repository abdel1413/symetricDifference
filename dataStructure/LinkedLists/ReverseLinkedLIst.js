class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const ReversedLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.add = function (elemet) {
    let newNode = new Node(elemet);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }

      if (current.next == null) {
        current.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
  };

  this.display = function () {
    let current = this.head;
    let data = [];
    while (current != null) {
      data.push(current.data);
      current = current.next;
    }
    return data;
  };

  //T: O(n)
  //S: O(1)
  this.reverse = function () {
    if (this.head == null) {
      console.log("this list is empty");
    }
    let current = this.head;
    let prev = null;
    while (current) {
      //save next node to avoid loosing it
      let nextNode = current.next;
      //reverse pointer
      current.next = prev;
      //now update prev to current node
      prev = current;

      //move to next node
      current = nextNode;
    }

    //change the list's head ;
    this.head = prev;
  };

  //T: O(n)
  //S: O(n)

  this.recursivelyReverse = function () {
    //base case
    let prev = null;
    let current = this.head;

    if (this.head == null) return null;

    if (current.next == null) {
      this.head = current;
      return current;
    }

    let newHead = this.recursivelyReverse(current.next);
    newHead.next = current;
    current.next = null;
    return current;
  };
};
