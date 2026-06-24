// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
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
