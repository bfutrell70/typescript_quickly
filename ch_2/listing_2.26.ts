// Listing 2.26 - The compiler's error with the type unknown
type Person = {
    address: string
}

let person2: unknown;

person2 = JSON.parse('{ "adress": "25 Broadway" }');
//console.log(person2.address);

// Listing 2.27 - The first version of the isPerson type guard
//const isPerson = (object: any): object is Person => "address" in object;

// Listing 2.29 - The isPerson type guard
const isPerson = (object: any): object is Person => !!object && "address" in object;

// Listing 2.28 - Applying the type guard
if (isPerson(person2)) {
    console.log(person2.address);
}
else {
    console.log('person2 is not a Person');
}