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
function calc(a, b, op, faulty = false) {
    if (faulty) {
        switch (op) {
            case 1: return a - b;   // + → -
            case 2: return a / b;   // - → /
            case 3: return a + b;   // * → +
            case 4: return a ** b;  // / → **
            case 5: return a * b;   // ** → *
            default: return "Invalid Operation";
        }
    } else {
        switch (op) {
            case 1: return a + b;
            case 2: return a - b;
            case 3: return a * b;
            case 4: return a / b;
            case 5: return a ** b;
            default: return "Invalid Operation";
        }
    }
}

const a = parseFloat(prompt("Enter first number:"));
const b = parseFloat(prompt("Enter second number:"));
const op = parseInt(prompt("Enter operation (1=sum, 2=diff, 3=product, 4=div, 5=exp):"));
const isFaulty = Math.random() < 0.1;
const res = calc(a, b, op, isFaulty);

console.log("Result of given operation is: " + res);