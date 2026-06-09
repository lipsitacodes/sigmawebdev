let a = parseInt(prompt("Enter a 1st number: "));
let b = parseInt(prompt("Enter a 2nd number: "));

try {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    let c = a / b;
    console.log("Result:", c);

} catch (error) {
    console.log("An error occurred:", error.message);
    console.log("Please enter valid numbers to perform division.");
} finally {
    console.log("file ended over here");
}