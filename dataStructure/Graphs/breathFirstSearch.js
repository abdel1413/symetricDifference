//1: create an object and set all the values as Infinity
// 2 :now set the root distce to 0 to start with;
// 3 create a queue and push the root in
// as long as the queue has element in, keep moving the first element
// from the queue
//4 get all its layer/levels nodes and save it in a var
// 5: create an array where to push all the current node's neighbors
//6: get the indix fo first layer; using .indexOf() method
// -  push index into neighbors array if found/defined
// - update index by using .indexOf(1, index + 1)
//6 loop thru neighbor array
// - increment the distce of node by 1 if it's = Infinity
// - push neighbors into queue
// 7 : return nodesLength

function breathFirstSearch(graph, root) {
  let nodesLengths = {};

  //set all the values to infinity
  for (let i = 0; i < graph.length; i++) {
    nodesLengths[i] = Infinity;
  }

  // set the root to 0 to start with
  nodesLengths[root] = 0;

  let queue = [root];

  while (queue.length) {
    let current = queue.shift();

    //get all the layers of current
    let currConnected = graph[current];
    const neighbors = [];
    let index = currConnected.indexOf(1); // get the first edge connection
    while (index != -1) {
      neighbors.push(index);
      // update index to keep on  searching
      index = currConnected.indexOf(1, index + 1);

      //loop thru neighbors
      for (let i = 0; i < neighbors.length; i++) {
        if (nodesLengths[neighbors[i]] === Infinity) {
          nodesLengths[neighbors[i]] = nodesLengths[current] + 1;
          queue.push(neighbors[i]);
        }
      }
    }
  }

  return nodesLengths;
}

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];

var g = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];

console.log(breathFirstSearch(exBFSGraph, 3));
// => { '0': 3, '1': 2, '2': 1, '3': 0 }
console.log(breathFirstSearch(g, 1));
//=> {0: 1, 1: 0, 2: 1, 3: Infinity}
