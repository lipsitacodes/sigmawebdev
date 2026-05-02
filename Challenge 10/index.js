/* Create a business name generator by combining list of adjectives and nouns with another word
Adjectives: Crazu Amazing Fantastic Fire
Shop name : Engine Foods Garments
Another word : Bro Limited Hub
*/

let rand = Math.random();
console.log(rand);
let first, second, third;

// let's genterate the first word
if (rand < 0.33) {
    first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing";
} else {
    first = "Fantastic";
}

// let's generate the second word
 rand = Math.random();
if (rand < 0.33) {
    second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";
} else {
    second = "Garments";
}
// let's generate the third word
 rand = Math.random();
if (rand < 0.33) {
    third = "Bro";
} else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";
} else {
    third = "Hub";
}
console.log(`The name of your business is ${first} ${second} ${third}`);