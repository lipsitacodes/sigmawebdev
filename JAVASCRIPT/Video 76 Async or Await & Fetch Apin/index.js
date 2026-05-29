// async function getData(){
// // simulate getting data in server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(453);
//         }, 4000);
//     });
// }

async function getData(){
// simulate getting data in server
let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')

 let b = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
let data = await b.text();
   console.log(b);
   console.log(data);
   return 456
}
async function main(){
console.log("Loading modules");

console.log("Do something else");

console.log("Load data");
let data = await getData();
//there is one alternative of this same code in async and await 
// data.then((v) => {
//     console.log(data);
//     console.log("Proces data");
//     console.log("task 2");
// })

    console.log(data);
    console.log("Proces data");
    console.log("task 2");
}
main();

