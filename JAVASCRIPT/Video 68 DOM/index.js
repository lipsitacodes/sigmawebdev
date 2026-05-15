console.log("Welcome to the DOM tutorial");

// let a = document.getElementsByClassName("box");
// console.log(a);

// a[2].style.backgroundColor = "red";
// a[1].style.backgroundColor = "yellow";
document.getElementById("red").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "pink";
document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "cyan";
    console.log(e.matches("#red"))
});

//Traditional for loop
//  for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
//     document.querySelectorAll(".box")[i].style.backgroundColor = "cyan";
// }
console.log(document.getElementsByTagName("div"))

const e = document.getElementsByTagName("div")

console.log(e[6].closest(".container"));
console.log(e[6].closest(".red"));
console.log(e[6].closest(".box"));
console.log(e[3].closest(".box"));
console.log(e[3].closest("#box"));
console.log(document.querySelector(".container").contains(e[3]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));









