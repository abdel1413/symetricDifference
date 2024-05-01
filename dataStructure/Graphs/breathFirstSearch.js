//1: create an object and:
let dist = {};
// a - set all the values to Infinity
// b- :now set the root distce to 0 to start with;
// 2 create a queue and push the root in
// 3: as long as the queue has element in, keep moving the first element
// from the queue:
// a- extrack first element from queue
let extractedNode = queue.shift();
// a- find all its layer/levels/neighbors nodes that have
// relationship with the extracted node and save it in a var
let currConnectedNode = grapth[extractedNode];
// b- create an array to push the index of first edge connection
let arr = [];
// c-  get the indix of first layer; using .indexOf() method
let ind = currConnectedNode.indexOf(1);
// d- push index into arr while found/defined
arr.push(ind);

// e- update index by using .indexOf(1, index + 1)
ind = currConnectedNode.indexOf(1, ind + 1);
//  loop thru index arr
// - increment the distce of node by 1 if it's = Infinity
dist[arr[i]] = dist[extractedNode] + 1;
// - push neighbors into queue
// 7 : return dist

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

function bsf(g, r) {
  let dist = {};
  for (let i = 0; i < g.length; i++) {
    dist[i] = Infinity;
  }
  dist[r] = 0;
  console.log("dist", dist);
  const queue = [r];
  console.log("q", queryLocalFonts);
  while (queue.length) {
    let extracted = queue.shift();
    console.log("ext", extracted);
    let extractedNeighbors = g[extracted];
    console.log("extrNe", extractedNeighbors);
    let ind = extractedNeighbors.indexOf(1);
    console.log("ind", ind);
    const connectedEdgesIndex = [];
    while (ind != -1) {
      connectedEdgesIndex.push(ind);
      console.log("cnnedEd", connectedEdgesIndex);
      ind = extractedNeighbors.indexOf(1, ind + 1);
      for (let i = 0; i < connectedEdgesIndex.length; i++) {
        if (dist[connectedEdgesIndex[i]] == Infinity) {
          dist[connectedEdgesIndex[i]] = dist[extracted] + 1;
          queue.push(connectedEdgesIndex[i]);
        }
      }
    }
  }
  return dist;
}
