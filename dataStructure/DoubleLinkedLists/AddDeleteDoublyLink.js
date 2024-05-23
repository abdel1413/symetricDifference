class {
    constructor(data, prev) {
        this.data = data;
        this.prev = prev;
        this.next = null;
    }
}
 

class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(element) {
        let newNode = new Node(element, null)
        if (!element) return false;
        if (!this.head ) {
            this.head = newNode;
            
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            
        }

        if (this.tail == null) {
            this.tail = newNode;
        } else {
            let prevNode = this.tail
            this.tail = newNode;
            this.tail.prev = prevNode;
        }





    }

    remove(ele) {
        if (!this.head && !this.tail) return null;
        if (this.tail.data == ele) {
            let prev = this.tail.prev;
            this.tail = prev;
            this.tail.next = null;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.data == ele) {
                    let removed = current;
                    let prev = current.prev;
                    let next = current.next

                    if (this.head.data == ele) {
                        this.head = next;
                        this.head.prev = null;
                        break;
                    }

                    prev.next = next;
                    next.prev = prev;
                }

                current = current.next;
            }
        }
    }
   
}