// Listing 3.3 - Invoking the constructor of the super class

// If both the superclass and the subclass have constructors, the
// subclass constructor must invoke the constructor of the superclass using
// the super() method.
class Person {
    constructor(
        public firstName: string, 
        public lastName: string, 
        private age: number) {}
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        public department: string
    ) {
        super(firstName, lastName, age);
    }
}

const empl = new Employee('Joe', 'Smith', 29, 'Accounting');