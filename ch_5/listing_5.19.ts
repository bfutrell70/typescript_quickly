// Listing 5.19 - Declaring a custom mapped type, Modifiable, page 108

type Modifiable<T> = {
    -readonly[P in keyof T]: T[P];
};

// Listing 5.20 - Applying the Modifiable mapped type, page 108

interface Person {
    readonly name: string,
    readonly age: number
}

const worker1: Person = { name: 'John', age: 25};

// compiler error since interface Person properties are readonly
worker1.age = 27;

const worker2: Modifiable<Person> = { name: 'John', age: 25};

worker2.age = 27;
