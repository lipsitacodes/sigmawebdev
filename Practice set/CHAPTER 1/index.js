//first question
let a = "Lipsita";
console.log(a+1);
//second question
console.log(typeof(a));
//third question
const obj = {
    a: 1,   
    b:"lipsita"
}
// obj = "hello"; 
// No, you cannot change a const object variable to hold a number later.
console.log(obj);
//fourth question
obj.c = 3;
console.log(obj);
// Yes, you can add new keys to a const object.
// const prevents reassignment of the object reference, not modification of its contents.

//fifth question
const dictionary = {
    Aesthetic: "Concerned with beauty or artistic appearance",
    Artistic: "Related to art",
    Serene: "Calm and peaceful",
    Curious: "Eager to know or learn",
    Vibrant: "Full of energy and life"
};

console.log(dictionary);