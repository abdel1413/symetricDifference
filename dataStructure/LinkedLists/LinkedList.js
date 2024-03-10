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

  //Remove at a given index
  //1: Make the first node (head)linked to the new node
  //2: remove the head from the original first node from linked L
  //3: make the new node as the head of the linked L

  //algorithm
  //1:Allocate a new node and name it newNode.
  //2: Put the required data into  newNode.
  //3: The ‘next’ pointer of the node should be pointed to the current head.
  //4: Now make the head pointer point to newNode.

  this.addAt = function (index, element) {
    //save current head in current node
    let currentNode = head;
    if (index < 0 || index >= length) {
      return null;
    }
    //as we loop thru the linked list , we need to keep track
    if (index > 0) {
      let tracker = 0;
      while (tracker + 1 !== index) {
        currentNode = currentNode.next;
        tracker++;
      }

      // create a new node with input element
      // as reassign it as head if the index is 0
      // or just link it at the end
      let newNode = new Node(element);
      if (index == 0) {
        //new node is our head node now
        head = newNode;
        //the new node should link to the node where
        //current node was linked to
        newNode.next = currentNode.next;
      } else {
        // since the index is not 0, we can just link our
        //new node based on the index or
        currentNode.next = newNode;
      }
    }
    //increment length by 1
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

  // create boolean var and set it to false
  // need tracker and set to -1
  //this will keep incrementing by 1 while bool is true
  // and there exist node
  //inside while loop,  set bool to true if current node match the input
  //element
  //after the loop go to next node
  // return tracker if bool is true or -1 otherwise;
  this.indexOf = function (element) {
    let isFound = false;
    let tracker = -1;
    let currentNode = head;
    while (!isFound && currentNode) {
      tracker++;
      if (currentNode.element === element) {
        isFound = true;
      }
      currentNode = currentNode.next;
    }

    return isFound ? tracker : -1;
  };

  //find the element by input index
  //0 assign head as our current element to start with
  //1 set bool to false
  //2 set a tracker to -1;
  //3 declare foundElement var
  //4 increment tracker while bool is true and that
  // there exist a node
  //5  tracker matches the index set bool to true
  //6 after the loop, go to next node
  //7 return element if bool is true or undefined otherwise
  this.elementAt = function (index) {
    let currentNode = head;
    let isFound = false;
    let tracker = -1;
    let foundElement;
    while (!isFound && currentNode) {
      tracker++;
      if (tracker == index) {
        isFound = true;
        foundElement = currentNode.element;
      }

      currentNode = currentNode.next;
    }

    return isFound ? foundElement : undefined;
  };

  this.isEmpty = function () {
    return !this.size() ? true : false;
  };

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

  //2nd solution
  this.removeAt2 = function (index) {
    let removedNode;
    let previousNode = head;
    let tracker = 0;
    if (index < 0 || index >= this.size()) {
      return null;
    }

    if (index == 0) {
      removedNode = head;
      head = null;
      length--;
      return removedNode.element;
    } else {
      let currentNode = head;
      if (currentNode.next) {
        tracker++;
        currentNode = currentNode.next;
      }
      if (tracker == index) {
        removedNode = currentNode.element;
        previousNode.next = currentNode.next;
      }
    }

    length--;
    console.log(removedNode);
    return removedNode;
  };
}
