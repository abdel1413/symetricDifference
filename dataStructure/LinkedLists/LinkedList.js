const Node = function (element) {
  this.element = element;
  this.next = null;
};

//create instance of function constructor
let Puppy = new Node("Puppy");
let Kitten = new Node("Kitten");
let Cat = new Node("Cat");
let Dog = new Node("Dog");

//link each node to oneanother
Puppy.next = Kitten;
Kitten.next = Cat;
Cat.next = Dog;

//

function LinkedList() {
  let head = null;
  let length = 0;

  this.head = () => head;
  this.size = () => length;

  this.add = (element) => {
    //assign the new Node instance to a var
    const node = new Node(element);

    //check if head is not null
    if (head) {
      const curr = head;
      //as long as the curr has  next node  != null, keep looping
      while (curr.next !== null) {
        // so assign curr to next node
        curr = curr.next;
      }
      // when finish loop and there is no more node, this is
      //where we want to add our node
      curr.next = node;
    } else {
      //node head so , so set head to node
      head = node;
    }

    // increment the length
    length++;
  };

  this.remove = function (node) {
    //set current node to head to start
    let currNode = head;
    let prevNode;
    // if the  curr node (head)  is the node to deleted,
    // then assign the next node to be head node
    if (currNode.element === node) {
      head = head.next;
    } else {
      //as long as the curren node is not the
      //the node we want to delete,
      // set the curr node as previous then
      //next node as current node
      while (currNode.element !== element) {
        prevNode = currNode;
        currNode = currNode.next;
      }

      //set previous node's pointer  to current node's pointer
      prevNode.next = currNode.next;
    }
    // decrement the length as we deleted it;
    length--;
  };

  // to remove the node from linkedlist
  // 1: check if the element is  = to the head
  //  if so, then set head to head.next
  // Decrement length by 1
  // 2:if the element to delete is in the middle:
  //a)  assign the head as previous node
  // b) check if it exist using while loop
  // c) now link the previous to current by setg curr to previous.next
  //d) check again if there exist a current
  // - chect if its elemet matches the search element
  // If so link current pointer to previous's  : previous.next = current.next
  //decrement length by 1
  // set previous to current;

  this.remove2 = function (element) {
    if (head.element == element) {
      head = head.next;
      return length--;
    }

    let prev = head;
    while (prev) {
      let curr = prev.next;
      if (curr) {
        if (curr.element == element) {
          prev.next = curr.next;
          return length--;
        }

        prev = curr;
      }
    }
  };

  //find the index of input element
  //

  this.indexOf = function (element) {};

  //find the element by input index
  this.elementAt = function (index) {};

  //remove node at input index
  this.removeAt = function (index) {
    let removedNode = head;
    let currentIndex = 0;
    if (index < 0 || index >= this.size()) {
      return null;
    }

    //if only one node in list
    // set head to null to delete
    if (index == 0) {
      head = null;
    } else {
      //set curr node to head

      let currentNode = head;
      // if cureent index is less than (index -1)
      //got to next node : crrent node = currentNdoe.next
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      // now link previous node to cureent node
      // curennt node should point to preveious node
      removedNode = currentNode.next;
      currentNode.next = removedNode.next;
    }
    //since we removed a matched node, we decrement the length
    length--;
    return removedNode.element;
  };
}
