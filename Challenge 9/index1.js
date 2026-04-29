/*Create faluty Calculator using Javascript

This faulty calculator does following :
->It takes two number as input from user
->It performs wrong opertaions as follows
+ --> -
* --> +
- --> /
/ --> **

1 === sum
2 === difference
3 === product
4 === division
5 === exponential
it performs wrong operation 10% of time
*/

let random = Math.random();
let a = parseInt(prompt("Enter first number:"));
let c = prompt("Enter operation:");
let b = parseInt(prompt("Enter second number:"));

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",

}
console.log(random);
if (random > 0.1) {
    // Perform wrong operation
    console.log(`The result is ${a} ${c} ${b} `);
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `);
} else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `);

}