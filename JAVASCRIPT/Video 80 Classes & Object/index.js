// let obj = {
//     a : 1,
//     b : "Lipsita"
// }
// console.log(obj);

//prototype
// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }
// rabbit.__proto__ = animal; //sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created");   
}
eats(){
    console.log("Khaa raha huu");   
}
jumps(){
    console.log("Kood raha hu");    
}
}
class Lion extends Animal{
      constructor(name){
        super(name);
        console.log("Object is created and he is lion...");   
}
    roar(){
        console.log("Roarrrr");
    }
    eats(){
        super.eats();
    console.log("Khaa raha huu roarrrr");   
}
}
let a = new Animal("Bunny");
let l = new Lion("Simba");
console.log(a);
console.log(l);
