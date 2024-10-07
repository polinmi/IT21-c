const person = {
    name: "polinmi",
    age: 99,
    gender: "sekret tagnaa beh"
};

// Process and Output
console.log("Hello There!");
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Gender: " + person.gender);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~");

// Class named Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}