// let arr = [2,3,4];
// console.log(arr.join("/"));
// // for(let i of arr){
// //     console.log(i);
// // }
// arr.pop();
// console.log(arr);
// arr.push(23)
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(83);
// console.log(arr);

let arr = [12,45,64,63,30,80,56,20,50,900];
let num;
do {
    num = parseInt(prompt("Enter a number:"));
    arr.push(num);
} while (num !== 0);
console.log(arr);

let result = arr.filter((value) => {
    return value % 10 == 0;
});
console.log("Filtered values (divisible by 10): "+result);

let result1 = arr.map((value) => {
    return value;
});
console.log("Mapped values(simply square values of array): "+result1);

let arr2 = [1,2,3,4,5,6];
let fact = arr2.reduce((n1,n2)=>{
    return n1*n2;
})
console.log("Factorial: "+fact);

