// Write a program to calculate factorial of a number using reduce and using for loops
let n = 8;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log("Calculating factorial using for loop:");
console.log("Factorial of", n, "is", factorial);

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
const Reduce = (a, b) => {
    return a * b;
}
console.log("Calculating factorial using reduce:");
console.log("Factorial of", n, "is", arr.reduce(Reduce));
