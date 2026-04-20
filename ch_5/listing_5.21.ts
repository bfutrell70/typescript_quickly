// Listing 5.21 - The declaration of the Partial mapped type, page 109

// this inteface not in the listing
interface Person {
    name: string,
    age: number
}

// makes the proerties in an interface/class optional
type Partial<T> = {
    [P in keyof T]?: T[P]
};

// requires both properties to be declared
const worker1: Person = { name: "John" };

const worker2: Partial<Person> = { name: 'John' };

// makes all properties required - not in code listing
type Required<T> = {
    [P in keyof T]-? : T[P]
};