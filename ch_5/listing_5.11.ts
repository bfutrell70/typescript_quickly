// Listing 5.11 - The unlawful change of the age, page 104

// not in code listing but was shown in Section 5.2.1, page 103
interface Person {
    name: string,
    age: number,
}

const worker: Person = { name: 'John', age: 22};

function doStuff(person: Person) {
    // we don't want to allow this
    person.age = 25;
}

doStuff(worker);
console.log(worker);

// Listing 5.12 - Using the mapped type Readonly, page 104

const worker2: Person = { name: 'John', age: 22};

// modifies the existing type with the mapped type Readonly
function doStuff2(person: Readonly<Person>): void {
    // this line generates a compiler error
    person.age = 25;
}