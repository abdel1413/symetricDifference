//1 create a function that takes grapth and root as params
//2 : creat a stack to push nodes/vertices
//3: create a visited array to push the nodes that are alred visited
//4:  create a array to push neighbors vertices
// 5 : while stack has length;
// a -pop element from stack
// b- check if the element popped from stack exist in the visited array
// if not push it in the visited array (use .indexOf()methd)
// c - set tempNeighbor to graph elemets;
// 6:  loop thru tempNeigbor
// a: push the index to stack if any value is equal to 1;
// 7: return visited aray
function depthFirstSearch(graph, root) {
  let stack = [];
  let visited = [];
  let tempNeighbors = [];

  stack.push(root);
  while (stack.length) {
    let tempNode = stack.pop();

    if (visited.indexOf(tempNode) == -1) {
      visited.push(tempNode);
      tempNeighbors = graph[tempNode];
      for (let i = 0; i < tempNeighbors.length; i++) {
        if (tempNeighbors[i] === 1) {
          stack.push(i);
        }
      }
    }
  }
  return visited;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];

var d = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
var c = [
  [0, 1, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
];
console.log(depthFirstSearch(exDFSGraph, 3));
// =>[ 3, 2, 1, 0 ]
console.log(depthFirstSearch(d, 1));
//=>[ 1, 2, 3, 0 ]
console.log(depthFirstSearch(c, 3));
//=>[ 3, 2 ]
