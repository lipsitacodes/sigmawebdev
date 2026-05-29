console.log("This is Promises");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Sorry random number is not supporting");
    }
    else{
        setTimeout(() => {
            console.log("Yes i am done 1");
            resolve("Lipsita1")
        }, 3000)
    }   
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Sorry random number is not supporting");
    }
    else{
        setTimeout(() => {
            console.log("Yes i am done 2");
            resolve("Lipsita2")
        }, 3000)
    }   
})
// prom1.then((a) => {
//     console.log(a);
// }).catch((error) => {   
//     console.log("My site is under maintenance");
// }).finally(()=>{
//     console.log("I am finally done");
// })

let p3 = Promise.any([prom1, prom2]);    
p3.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
}
)


