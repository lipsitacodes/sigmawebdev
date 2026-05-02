let a = [1, 2, 3, 42, 5, 61, 79, 8, 9];

console.log("Printing the value of array using for loop");
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}
console.log("Printing the value of array using forEach loop");
a.forEach((value, index, a) => {
    console.log(value, index, a);
})

let obj = {
    name: "Lipsita",
    age: 22,
    city: "Bangalore"
}
console.log("Printing the value of object using for in loop");
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key));
    const element = obj[key];
    console.log(element, key, obj);

}

console.log("Printing the value of array using for of loop");
for (const element of a) {
    console.log(element);
}


let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for(let i = 0; i <arr.length;i++){
//     const element = arr[i];
//     newArr.push(element**2);

// }
let newArr = arr.map((e, i, arr) => {
    console.log("Element:", e, "| Index:", i, "| Full Array:", arr);
    return e ** 2;
})
console.log("Printing all the values of old array:");
console.log(arr);
console.log("Printing all the values of new array by squaring the values of the old array:");
console.log(newArr);

const greaterthanseven = (e) => {
    if (e > 7) {

        return true;
    }
    return false;
}
console.log(a.filter(greaterthanseven));
console.log("Printing all the values of array that are greater than 7:");

let arr2 = [3,4,6,5,2,1];
const red = (a,b) =>{
    return a*b;
}
console.log(arr2.reduce(red)); //3*4*6*5*2*1 = 720