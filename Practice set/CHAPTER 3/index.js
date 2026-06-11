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
let num = {
    num1 : 1,
    num2 : 2,
    num3 : 4,
    num4 : 5,
    num5 : 6
}
let sum = 0;
for(let key in num){
    sum = sum + num[key];
}
let mean = sum/5;
console.log("The mean is: " + mean);