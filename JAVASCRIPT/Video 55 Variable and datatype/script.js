console.log("Hey this is turorial 55 of js")
let a = 5;
// a = a + 1;
var b = 6;
var c = "Lipsita"

// for modern java script always use let instead of var
console.log(a + b);
console.log(typeof a, typeof b, typeof c);

{
    // let locally scope
    let a = 7;
    console.log(a);
    // var is globally scope
    var b = 76;
    console.log(b);
}
console.log(b);
console.log(a);
// const a1 = 8;
// a1 = a1+1; this is not allowed because this is constant and you can't change the value of 

let x = "Lipsita";
let y = 22;
let z = 3.44;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);


// object in javascript is basically key value pair
let o = {
    "name": "Lipsta",
    "job code": 5600,
    "is_smart": true
}
console.log(o);
o.salary = "100cr";
console.log(o);
o.salary = "500cr";
console.log(o);