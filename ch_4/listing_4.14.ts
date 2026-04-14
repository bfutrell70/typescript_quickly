// Listing 4.14 - Using generic types in fat arrow functions, page 87

const printMe = <T> (content: T): T => {
    console.log(content);
    return content;
}

const a = printMe("Hello");

class Person {
    constructor(public name: string) {}
}

const b = printMe(new Person("Joe"));

// alternative ways to invoke functions
// TypeScript will infer the type, so doing this is not needed
const c = printMe<string>("Hello");
const d = printMe<Person>(new Person("Jake"));