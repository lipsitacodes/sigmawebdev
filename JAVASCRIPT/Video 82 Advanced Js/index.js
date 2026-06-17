async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
(async function main() {
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b);
let [x,y,...rest] = [1,3,34,2,4,22,43,2]
console.log(x,y,rest);
let obj = {
    a:1,
    b:2,
    c:3
}
let {a,b} = obj
console.log(a,b);

})();
let arr = [1,3,4]
let object = {...arr} //it will convert an array into an object
console.log(object);

console.log(sum(arr[0], arr[1],arr[2]));
console.log(sum(...arr)); //this is called spread operator ...
function sum (a,b,c){
    return a+b+c;
}
