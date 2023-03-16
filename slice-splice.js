//How to slice element of an array
/*
const friends = [25, 14, 13, 12, 21,];

const partial = friends.slice(1, 4);
console.log(partial);
console.log(friends);
*/


//How to splice element of an array
// removes elements from an array
//and, if necessary, inserts new elements in their place
// Returning the deleted elements
// Will change the original array

const friends = [25, 14, 13, 12, 21, 33, 45];
// Start from index: 1 and take 3 elements
const partial = friends.splice(1, 3); 

// 1- starting index, 3- how many to take, 99, 555, 777 - as musch
// elements to add
const partial2 = friends.splice(1, 3, 99, 555, 777); 

console.log(friends);
console.log(partial);
console.log(partial2);
