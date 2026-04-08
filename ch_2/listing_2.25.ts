// listing 2.25 - using the any type
type Person = {
    address: string
}

let person1: any;
person1 = JSON.parse('{ "adress": "25 Broadway" }');

console.log(person1.address);