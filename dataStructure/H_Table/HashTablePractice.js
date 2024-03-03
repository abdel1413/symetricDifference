let obj = {};
obj.name = "smith";
obj.hasOwnProperty("name"); //=> true
// NOTE: It is better to use Map() function
//with Hashtable than the Object function
//for 2 reason

//1: the Object inherited properties may be overwritten
obj.hasOwnProperty = true;
obj.hasOwnProperty("name"); //=>TypeError: obj.hasOwnProperty is not a function
//THis is bcz the hasOwnProperty() methd is overwritten.

//2  The size of the hash table is not tracked so you have to manually
// count the number of properties defined by the programmer

//But with Map(), we can't overwrite its properties

const collection = new Map();
// only add data using set()
collection.set("jane", "347-518-2522");
collection.set("smith", "646-718-2259");

//only retrieve data using get()
collection.get("jane"); // 347-518-2522

//use .size() to get the size of collection
collection.size; // 2

//NOTE: we CAN'T OVERWRITE THE PROPERTIES OF MAP()
collection.size = false;
collection.size; //=> 2
//this is bcz we the size method is not overwritten
//tho we tried to to overwrite it;

//We can also iterate thru the Map()
for (let [key, value] of collection) {
  console.log(`${key}, ${value}`);
}
//name, somthein
// jan, 347-518-2522
