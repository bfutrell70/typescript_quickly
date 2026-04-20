// Listing 5.22 - Applying more than one mapped type, page 110

interface Person {
    name: string,
    age: number
}

type Partial<T> = {
    [P in keyof T]?: T[P]
};

// worker1 is still a person, but its properties are read-only and options
const worker1: Readonly<Partial<Person>> = {name: 'John'};

// compiler error - read-only property
worker1.name = "Mary";