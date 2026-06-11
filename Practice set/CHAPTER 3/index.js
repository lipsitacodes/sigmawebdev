let obj = { Lipsita: 98, Harry: 98, Loshit: 92 };
for(let key in obj){
    console.log(key + ": " + obj[key]);
}

let x = 5;
let a = parseInt(prompt("Enter a number: "));
while(a!=x){
    console.log("Try again!");
    a = parseInt(prompt("Enter a number: "));
}
function mean(obj){
    let sum = 0;
    let count = 0;

    for(let key in obj){
        sum += obj[key];
        count++;
    }

    return sum / count;
}
let num = {
    num1 : 1,
    num2 : 2,
    num3 : 4,
    num4 : 5,
    num5 : 6
}
let ans = mean(num);
console.log("The mean is: " + ans);