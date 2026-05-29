console.log("This is Promises");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Sorry random number is not supporting");
    }
    else{
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Lipsita")
        }, 3000)
    }   
})
prom1.then((a) => {
    console.log(a);
}).catch((error) => {   
    console.log("My site is under maintenance");
}).finally(()=>{
    console.log("I am finally done");
})


