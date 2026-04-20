// listing 5.16 - A buggy implementation of filterBy(), page 106

interface Person {
    name: string,
    age: number
}

const persons: Person[] = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 33 }
]

function fiterBy<T> (
    property: any,
    value: any,
    array: T[]
) {
    return array.filter(item => item[property] === value);
}

// a correct invocation of the function
console.log(fiterBy('name', 'John', persons));

// an incorrect invocation of the function
console.log(fiterBy('lastName', 'John', persons));

// an incorrect invocation of the function
console.log(fiterBy('age', 'twenty', persons));