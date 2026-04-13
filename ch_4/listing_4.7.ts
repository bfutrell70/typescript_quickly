// Listing 4.7 - Using a generic type, page 77

class Person {
    name: string | undefined;
}

class Employee extends Person {
    department: number | undefined;
}

class Animal {
    breed: string | undefined;
}

const workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();
// compile-time error - Animal isn't a subtype of Person
// workers[2] = new Animal();