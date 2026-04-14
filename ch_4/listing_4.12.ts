// Listing 4.12 - A function with the type any, page 86

function printMe(content: any): any {
    console.log(content);
    return content;
}

const a = printMe("Hello");

class Person {
    constructor(public name: string) {}
}

const b = printMe(new Person("Joe"));