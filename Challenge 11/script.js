let a = 6
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    return c;
}

function factfor(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log("This is using reduce funtion : " + factorial(a));
console.log("This is using tradtional for loop funtion : " + factfor(a));

