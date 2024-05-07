// creat a constructor that takes the size or queue
//declare empty array;
// write and read to 0
//max = size -1;

// add null as long as the size is greater than 0;

// enqueue method
// check if the element at read index is  null
//then add item to queue
//increment write by one;
//set write to 0 if write is greater than max
// return item otherwise null

//dequeue method
//check if item at index read is not null, then:
// retrieve element at index read from queue and assign it to var item
// set the next the element at index reat (read++) to null
//set read to 0 when it is greater than max
// return item otherwise null

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.write = 0;
    this.read = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] == null) {
      this.queue[this.write++] = item;
      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      //remove the item and set the position to null
      this.queue[this.read++] = null;
      // when reach to the end or q, set read to 0 to
      //start
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
}

let q = new CircularQueue([5]);
console.log(q.enqueue(5));
