/**
 * Classes are blueprints that when created make objects known as instances
 * Classes are created with the new keyword
 */
class Student {
    // The constructor function is a special function that gets run when the class is instantiated
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
    }
    /** 
     * The static keyword defines a static method or field for a class, 
     * or a static initialization block (see the link for more information about this usage). 
     * Static properties cannot be directly accessed on instances of the class. 
     * Instead, they're accessed on the class itself. 
     * 
     * Static methods are often utility functions, such as functions to create or clone objects, 
     * whereas static properties are useful for caches, fixed-configuration, 
     * or any other data you don't need to be replicated across instances.
    */
    static enrollStudents() {
        return "Enrolling Students";
    }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);
let kitty = new Student("Kitty", "Kat", 1);

firstStudent.fullName()
firstStudent.markLate();
firstStudent.markLate();

console.log(firstStudent);
