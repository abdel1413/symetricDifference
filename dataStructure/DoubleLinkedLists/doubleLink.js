class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

const DoubleLink = function () {
  this.head = null;
  this.tail = null;
};

//1:create a new node
//2: pointe new node to the head;
//3: point  previous to new node;
//4: set head to new node
this.prepend = function (element) {
  const node = new Node(element);
  node.next = this.head;
  this.head.prev = node;
  this.head = node;
};

this.append = function (element) {
  const newNode = new Node(element);

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
  const newNode = new Node(node);
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
