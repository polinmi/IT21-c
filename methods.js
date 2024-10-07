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

    // Solution 1: Display via console.log
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
    }

    // Solution 2: Display via HTML
    displayViaHTML() {
        const personElement = document.getElementById('person1');
        if (personElement) {
            personElement.innerHTML = `
                <strong>Name:</strong> ${this.name}<br>
                <strong>Age:</strong> ${this.age}<br>
                <strong>Gender:</strong> ${this.gender}
            `;
        } else {
            console.error('Element with ID "person1" not found.');
        }
    }
}

// Create an instance of Person
const person1 = new Person("polinmi", 20, "Female");

// Calls the methods
person1.displayInfo();
person1.displayViaHTML(); // Call this to display in HTML