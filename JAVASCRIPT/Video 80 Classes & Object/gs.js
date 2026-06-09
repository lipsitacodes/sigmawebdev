class user{
    constructor(name){
        //invoke the setter 
        this.name = name;
    }
    get name(){
         return this._name;
    }
    set name(name){
        if(name.length < 4){
            console.log("Name is too short");
            return;
        }
        this._name = name;
    }
}
let u = new user("Lipsita");
console.log(u.name);
user = new user("Lip");