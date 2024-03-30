class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class ReversedLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    let node = new Node(data, null);
    let current = this.head;
    if (current == null) {
      this.head = node;
      this.tail = node;
    } else {
      let tail = this.tail;
      tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

  reverse() {
    //check if the list is empty
    if (this.head == null) return null;

    //create a temp node that will hold the next node after update
    let temp = null;
    //get the head node and set it as our current node
    let current = this.head;

    //set tail to head
    this.tail = current;

    //loop thru the list
    while (current !== null) {
      //save prev node to temp
      temp = current.prev;
      // assign next node to prev node (current.prev)
      current.prev = current.next;

      // now the next node should hold the temp node
      current.next = temp;

      // update the current node
      current = current.prev;
    }

    // check if the temp node exist then set the head to its prev node
    if (temp !== null) {
      this.head = temp.prev;
    }
  }
}
