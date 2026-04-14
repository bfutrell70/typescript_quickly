// Listing 4.8 - Generics and the structural type system, page 79

class Person {
    name: string | undefined;
}

class Employee extends Person {
    department: number | undefined;
}

class Animal {
    name: string | undefined;
    breed: string | undefined;
}

const workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal();

workers[3] = { name: "Mary" };

// compilation error
// const worker: Animal = new Person();