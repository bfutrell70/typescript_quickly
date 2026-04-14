// Listing 4.13 - A generic function, page 87

function printMe<T> (content: T): T {
    console.log(content);
    return content;
}

const a = printMe("Hello");

class Person {
    constructor(public name: string) {}
}

const b = printMe(new Person("Joe"));