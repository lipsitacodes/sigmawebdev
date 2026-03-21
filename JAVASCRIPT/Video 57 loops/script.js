console.log("I am tutorial on loops");
let a = 10;

//normal for loop
for (let i = 0; i <= a; i++) {
    console.log(i + 1);
}

let obj = {
    name: "Lipsta",
    role: "Engineer",
    comapny: "Google"
}

// for of loop is used to print object (key value pair)
for (const key in obj) {
    console.log(key);
}

//for in loop for iterative data structure
for (const c of "Lipsita") {
    console.log(c);
}

// while
let i = 19;
while (i > a) {
    console.log(i);
    i--;
}

// do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);