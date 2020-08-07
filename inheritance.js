class Parent{
    constructor(){
        this.motherName = "Razia";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ //class er vitore function keyword use korte hy na
            return this.name + " " + this.motherName;
        }
}
const baby = new Child("meem");
const baby2 = new Child("swad");
console.log(baby);
console.log(baby2.getFullName());