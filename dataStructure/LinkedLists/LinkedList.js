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

  // to remove the node from linkedlist
  // 1: check if the element is  = to the head
  //  if so, then set head to head.next
  // Decrement length by 1
  // 2:if the element to delete is in the middle:
  //a)  assign the head as previous node
  // b) check if it exist using while loop
  // c) now link the previous to current by set curr to previous.next
  //d) check again if there exist a current
  // - chect if its elemet matches the search element
  // If so link current to previous : previous.next = current.next
  //decrement length by 1
  // set previous to current;
  this.remove = function (element) {
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
}
