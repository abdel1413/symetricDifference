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
