class HashT {
  constructor() {
    this.values = new Array(10);
    this.size = 0;
  }

  _hashfunction(key) {
    let index = key % 10;
    return index;
  }

  insert(value) {
    let indx = this._hashfunction(value);
    this.values[indx] = this.values[indx] || [];
    this.values[indx] = value;
    this.size++;
  }

  get(key) {
    let indx = this._hashfunction(key);
    return this.values[indx];
  }

  remove(key) {
    let indx = this._hashfunction(key);
    if (this.values[indx]) {
      this.values[indx] = [];
      this.size--;
      return true;
    }
    return false;
  }
  search(key) {
    let indx = this._hashfunction(key);
    if (this.values[indx] == key) {
      console.log(
        "the value " + this.values[indx],
        "is found at index " + indx
      );
    } else {
      console.log("Not found ");
    }
  }
}
