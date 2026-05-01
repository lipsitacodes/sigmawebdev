let arr = [1, 2, 3, 4, 5,0,12,43,11,9];

// Accessing elements
console.log(arr,typeof arr); // Output: [1, 2, 3, 4, 5] 'object'
console.log(arr[0]); // Output: 1
console.log(arr[2]); // Output: 3
console.log(arr.length);
// Modifying elements
//Array is mutable
arr[1] = 20;
console.log(arr); // Output: [1, 20, 3, 4, 5]
// console.log(arr[5]); // Output: undefined
// Adding elements
arr.push(6);
console.log(arr); // Output: [1, 20, 3, 4, 5, 6]
console.log(arr.toLocaleString()); //synatax to convert array to string
console.log(arr.join("//")); // Output: "1//20//3//4//5//6"
// Removing last elements pop
arr.pop();
console.log(arr);

// Adding elements at the last push
arr.push("Lipsita");
console.log(arr);
//Removing first element
arr.shift();
console.log(arr);
// Adding elements at the beginning
arr.unshift(0);
console.log(arr);
delete arr[1];
console.log(arr); // Output: [0, empty, 3, 4, 5, "Lipsita"]
console.log(arr[1]); // Output: undefined

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

// Concatenating arrays
let a4 = a1.concat(a2, a3);
console.log(a4); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrt = arr.sort;

console.log(arrt); // Output:  sort() { [native code] }

 