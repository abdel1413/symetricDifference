function Stack() {
  const collection = [];

  this.print = () => {
    console.log(collection);
  };

  //push
  this.push = (item) => {
    return collection.push(item);
  };
  //remove and return the top/last item from Stack
  this.pop = () => {
    return collection.pop();
  };
  //return the top of last item in Stack
  this.peek = () => {
    return collection[collection.length - 1];
  };

  //check if the stack is empty
  this.isEmpty = () => {
    return collection.length == 0;
  };

  //clear all the items in stack
  this.clear = () => {
    return (collection.length = 0);
  };
}
