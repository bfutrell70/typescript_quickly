// Listing 5.24 - A function with a conditional return type, page 112

class Product {
    id!: number;
}

const getProducts = function<T>(id? : T): T extends number ? Product : Product[] {
    if (typeof id === 'number') {
        return { id: 123} as any;
    } else {
        return [{id: 123}, {id: 567}] as any;
    }
}

// returns a Product
const result1 = getProducts(123);

// returns an array of Product objects
const result2 = getProducts();

console.log(result1);
console.log(result2);