console.log("Loops using simple for loop");
for(let i = 0; i < 10; i++) {
    console.log(i);
}
let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log("Loops using for in loop");
for(let key in obj) {
    console.log(key + ": " + obj[key]);
}
let arr = [1, 2, 3, 4, 5];
console.log("Loops using for of loop");
for(let value of arr) {
    console.log(value);
}