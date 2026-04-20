// Listing 5.17 - A better version of filterBy(), page 107

interface Person {
    name: string,
    age: number
}

const persons: Person[] = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 33 }
]

function fiterBy<T, P extends keyof T> (
    property: P,
    value: T[P],
    array: T[]
) {
    return array.filter(item => item[property] === value);
}

// a correct invocation of the function
console.log(fiterBy('name', 'John', persons));

// an incorrect invocation of the function
// now produces a compile error due to a non-existent property name
console.log(fiterBy('lastName', 'John', persons));

// an incorrect invocation of the function 
// now produces a compile error due to an incorrect data type for the value to search for
console.log(fiterBy('age', 'twenty', persons));