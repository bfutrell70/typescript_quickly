// Listing 5.23 - Using the Pick mapped type, page 111

interface Person {
    name: string,
    age: number,
    address: string
}

// declares the PersonNameAddress mapped type with two properties
type PersonNameAddress<T, K> = Pick<Person, 'name' | 'address'>;