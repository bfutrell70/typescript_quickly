// Listing 4.17 - Using compare() and Pair

class Pair<K, V> {
    constructor(public key: K, public value: V) {

    }
}

function compare <K, V> (pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
    return pair1.key === pair2.key && 
            pair1.value === pair2.value;
}

let p1: Pair<number, string> = new Pair(1, "Apple");

// declaration using type inference
let p2 = new Pair(1, "Orange");

// comparing apples to oranges
console.log(compare<number, string>(p1, p2));

let p3 = new Pair("first", "apple");
let p4 = new Pair("first", "apple");

// comparing apples to apples
console.log(compare(p3, p4));