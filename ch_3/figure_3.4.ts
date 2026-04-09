class Person {
    public firstName = "";
    public lastName = "";
    private age = 0;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

// more concise constructor
class Person2 {
    constructor(
        public firstName: string, 
        public lastName: string, 
        private age: number) { }
}

const pers = new Person2('John', 'Smith', 29);

// console.log(`${pers.firstName} ${pers.lastName} ${pers.age}`);