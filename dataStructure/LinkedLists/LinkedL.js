class LinkedL {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hashed = 0;
    for (let i = 0; i < key.length; i++) {
      hashed += key.charCodeAt(i);
    }
    return hashed % this.table.length;
  }

  set(key, value) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index][i][1] = value;
          this.size++;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] == key) {
          return this.table[index][i][1];
        }
      }
    }

    return undefined;
  }

  remove(key) {
    let index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      let chainedValues = values.map(([key, value]) => {
        return `[${key} , ${value}]`;
      });

      console.log(`${index}, ${chainedValues}`);
    });
  }
}
