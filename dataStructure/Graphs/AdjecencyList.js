//we can present adjecency list undericted/ directed using either object or array

//object containing undirected edges
// there is edge btw Jeff and James
// there is edge btw Jill and Jenny
// there is edge btw Jenny and Jill

let adjecency = {
  Jeff: ["James", "Jenny"],
  Jill: ["Jenny"],
  James: ["Jeff"],
  Jenny: ["Jeff", "Jill"],
};

// underected graph with array
const graph = [
  [1, 2], //node 1
  [0], //node 2
  [0], // node 3
];

// relationxship btw first and fourth node
//ie(inside first row  we've 1 at 3rd col and inside the fourth row we've 1

// relationship btw first and third
//(insed first row, we've 1 at 3rd col and inside 3rd row, we've 1 at first col)

// relationship btw  3rd and fith
// ( inside 3rd row we've 1 at 5th coll, and inside the fifth row, we've
// 1 at 3rd col)

//relationshop btw fourth and fifth
//(insed 4th row, we've 1 at 5fh col and inside 5th rw, we've 1 at 4th col)

const AdjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
];

// four edges with 5 nodes:
// col represent edges
// row represent nodes themeselves

// first edge btw 1st and 2nd node
//   [1,0,0,0,],
//  [1,0,0,0,],
//  [0,0,0,0,],
//  [0,0,0,0,],
//  [0,0,0,0,],

//2nd edge btw 2nd and 3rd nodes
// [0,o,0,0,],
// [0,1,0,0,],
// [0,1,0,0,],
// [0,0,0,0,],
// [0,0,0,0,],

//3rd edg btw 3rd and 5th nodes
//   [0,0,0,0,],
//   [0,0,0,0,],
//  [0,0,1,0,],
//  [0,0,0,0,],
// [0,0,1,0,],

//4th edg btw 2nd and 4th nodes
// [0, 0, 0, 0],
// [0, 0, 0, 1],
// [0, 1, 0, 0],
// [0, 0, 0, 1],
// [0, 0, 0, 0],

const incidentMatrix = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
];
