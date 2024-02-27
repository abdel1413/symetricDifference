class Queue {
  constructor() {
    this.queue = [];
  }
  print() {
    console.log(this.queue);
  }

  // and item to the tail of queue
  enqueue(item) {
    return this.queue.push(item);
  }

  // remove first/front item from queue
  dequeue() {
    return this.queue.shift();
  }
  //check front item
  front() {
    return this.queue[0];
  }

  // check the length
  isEmpty() {
    return this.queue.length == 0;
  }

  //check the size
  size() {
    return this.queue.length;
  }
}
