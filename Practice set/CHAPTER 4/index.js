console.log("har\"".length);
console.log("Lipstia".length);

let name = "Lipsita";
console.log("This is the function result for includes: " + name.includes('s'));
console.log("This is the function result for startsWith: " + name.startsWith('L'));
console.log("This is the function result for endsWith: " + name.endsWith('a'));

console.log("Converted the original string into lower case letter : " + name.toLowerCase());

let str = "Please give Rs 1000";
console.log(str.slice(15));
let newstr =str.replace("h","s");
console.log("Converted the original string : " + newstr);