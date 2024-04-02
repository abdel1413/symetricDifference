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

  this.add = function (node) {
    let newNode = new Node(node);

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

  this.reverse = function () {
    let prev = null;
    if (this.head == null) {
      console.log("this list is empty");
    }
    let current = this.head;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  };
};
