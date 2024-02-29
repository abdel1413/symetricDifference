class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }

  enqueue(item) {
    let index = this.collection.findIndex((element) => element[1] > item[1]);
    if (index !== -1) {
      return this.collection.splice(index, 0, item);
    } else {
      return this.collection.push(item);
    }
  }
  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection.shift()[0];
  }

  size() {
    this.collection.length;
  }
  isEmpty() {
    this.collection.length == 0;
  }
}

let q = new PriorityQueue([
  ["human", 1],
  ["kitten", 2],
  ["dog", 2],
  ["rabbit", 2],
]);

q.dequeue(); //=> remove
