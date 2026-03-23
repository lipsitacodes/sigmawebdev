function nice(name) {
    console.log("Hey " + name + " you are nice!!");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your dress is nice!!");
    console.log("Hey " + name + " you are teaching style is amezing");
}
nice("Lipsita");
nice("Loshit");

function sum(a, b) {
    let c = a + b;
    // console.log("Sum is : "+c);
    return c;
}
sum(3, 3);

res = sum(3, 8);
console.log("Sum of these number is : " + res);

function def(a,b,c=5){
    console.log(a,b,c);
let d = a+b+c;
return d;
}

let ans = def(3);
console.log("This is the answer for with default variable is : "+ans);

const func1 = (a)=>{
    console.log("I am an arrow function",a);
}
func1(45);
func1(4);
func1(5);
func1(245);
