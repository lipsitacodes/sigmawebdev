// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
let s = [
  "Lipsita",
  "Mayank",
  "Loshit",
  "Harry",
  "Priyadarshini",
  "Shinghaniya",
  "Mamali",
  "Laddu",
  "Kitty",
  "Preety",
];
let houses = [];
for (const student of s) {
  if (student.length < 6) {
    houses.push("Gryffindor");
  } else if (student.length < 8) {
    houses.push("Hufflepuff");
  } else if (student.length < 12) {
    houses.push("Ravenclaw");
  } else {
    houses.push("Slytherin");
  }
}
console.log(houses);
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let a = [1, 2, 2, 3, 4, 4, 5];
let result = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] !== a[i - 1]) {
    result.push(a[i] * 2);
  }
}
console.log(result);
// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let str = "Hello";
let str2 = "olleH";
console.log(str.concat(str2));
// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

//The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
// let l = [1,2,3,5,6,4,23,25,64,643,22]
let l = [1, 2, 3, 4, 5, 6];
let sum = l.reduce((a, b) => {
  return a + b;
});

console.log("Sum of the all the number present in the array is : "+sum);

//The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
let word = prompt("Enter your name");
console.log("Number vowels pressents in your name is : "+checkVowel(word));

function checkVowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
