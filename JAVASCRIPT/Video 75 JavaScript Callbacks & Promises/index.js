console.log("Hello i am Lipsita")
console.log("Hello i am Ipsita")

setTimeout(() => {
    console.log("I am inside set time out")
}, 9000);
console.log("The End !!")

const fn = () => {
  console.log("Nothing!")
}

const callback = (e,fn) => {
    console.log(e)
    fn()
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Lipsita hello",fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)