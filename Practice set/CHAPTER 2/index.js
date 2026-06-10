//1st question
let age = parseInt(prompt("Enter Your age"));
console.log(age>10 && age < 20);
(age>18) ? console.log("You can drive") : console.log("You cannot drive")
//2nd question
let a;
a = parseInt(prompt("Enter a number"));
switch (a) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
        break;
}

let num = parseInt(prompt("Enter your favorite number"));
if(num % 2 && num % 3){

    console.log("Number is divisible by 2 and 3 : Yes ");
}else{
    console.log("Number is divisible by 2 and 3 : No ");

}
