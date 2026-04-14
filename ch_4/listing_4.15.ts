// Listing 4.15 - The generic Pair class, page 88

class Pair<K, V> {
    constructor(public key: K, public value: V) {}
}

// Listing 4.16 - A generic compare function, page 88

function compare<K, V> (pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
    return pair1.key === pair2.key && pair1.value === pair2.value;
}