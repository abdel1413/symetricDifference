class Node {
  constructor(data, prev) {
    this.data = data;
    this.prv = prev;
    this.next = null;
  }
}

class AddRemove {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  add(element) {
    let newNode = new Node(element, null);

    if (!element) return false;
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      let tail = this.tail;
      this.tail = newNode;
      this.tail.prev = tail;
    }
  }

  remove(element) {
    if (!this.head && !this.tail) return null;
    if (this.tail.data == element) {
      let prev = this.tail.prev;
      this.tail = prev;
      this.tail.next = null;
    }
    if (this.head.data == element) {
      let next = this.head.next;
      this.head = next;
      this.head.prev = null;
      return;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.data == element) {
          let removed = current;
          let prev = current.prev;
          let next = current.next;
          prev.next = next;
          next.prev = prev;
        }
        current = current.next;
      }
    }
  }
}
