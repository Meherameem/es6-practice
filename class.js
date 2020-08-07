class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = 'Hogwarts';
    }

}
const student1 = new Student(11, "taylor");
const student2 = new Student(12, "joey");

console.log(student1, student2);