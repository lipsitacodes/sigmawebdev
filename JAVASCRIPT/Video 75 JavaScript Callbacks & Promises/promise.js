console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Yes i am done");
        resolve("Lipsita")
    }, 3000)

})
prom1.then((a) => {
    console.log(a);
})