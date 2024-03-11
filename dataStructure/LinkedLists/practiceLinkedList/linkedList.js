class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
a.next = b;
b.next = c;
c.next = d;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
one.next = two;
two.next = three;
three.next = four;

//iterative function
const print = (head) => {
  const values = [];
  let current = head;
  //note don't say current.next as this will
  //only print all values BUT one
  while (current != null) {
    values.push(current.value);
    current = current.next;
  }
  return value;
};

print(a); // A, B, C, D

//recursively printing
const recursivePrint = (head) => {
  let values = [];
  //call a helper func
  fillValues(head, values);
  return values;
};

//a function that  recursively chexk
//wether the head is null o
//if not then it call itself and pass next head
const fillValues = (head, values) => {
  if (head == null) {
    return;
  } else {
    values.push(head.value);
    fillValues(head.next, values);
  }
};

//sum values from list
//TC = O(n)
//SP = O(i)
const sumList = (head) => {
  const sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.value;
  }

  return sum;
};

//recursively summing
//TC = O(n)
//SC = O(n)
const recursivelySum = (head) => {
  if (head == null) return 0;
  return head.value + recursivelySum(head.next);
};

// find a target
//TC = O(n)
//SP = O(1)
const findTarget = (head, target) => {
  let current = head;
  let targetFound;
  while (current !== null) {
    if (current.value === target) {
      targetFound = current.value;
      return true;
    }
    current = current.next;
  }
  return targetFound;
};

// recursively find target
//1; need two base case one reutrning true and other return false

//TC = O(n)
//SP = O(n) bcz call of stack
const recursivelyFindTarget = (head, target) => {
  if (head === null) return false;
  if (head.value === target) return true;
  return recuursivelyFindTarget(head.next, target);
};

// find elemen by index
// need tracker
// TC=O(n)
//SC = O(1)
const findElementByIndex = (head, index) => {
  let tracker = 0;
  let current = head;
  while (current !== null) {
    if (tracker === index) return current.value;
    tracker++;
    current = current.next;
  }
  return null;
};

//recursive
//need two base cases
//TC = O(n)
//SP =O(n)
const getNode = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.value;
  return getNode(head.next, index - 1);
};

//const reverse
// need 3 var : prev to initially hold null
// current to hold the head
// next to hold the next  node  so that we don't loose
// the next node when we change the point of current to
// point at prev.

const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;

    // change the pointer to point to prev
    current.next = prev;
    //now reassign prev to hold current
    prev = current;
    //current to hold next
    current = next;
  }
  //return the prev
  return prev;
  //reverse is completed
};

// recursive
const recursiveReverse = (head, prev = null) => {
  if (head == null) return prev;
  const next = head.next;
  head.next = prev;
  return recursiveReverse(next, head);
};
