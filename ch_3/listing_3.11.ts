// Listing 3.11 - Overloading constructors, page 59
class Product {
    id: number;
    description: string;

    constructor();
    constructor(id: number);
    constructor(id: number, description: string);
    constructor(id?: number, description?: string) {
        // my code - not from book
        if (typeof id === 'number') {
            this.id = id;
        } else {
            this.id = 0;
        }

        if (typeof description === 'string') {
            this.description = description;
        } else {
            this.description = '';
        }
    }
}

const product1 = new Product();
const product2 = new Product(1);
const product3 = new Product(1, 'great product');

console.log(JSON.stringify(product1));
console.log(JSON.stringify(product2));
console.log(JSON.stringify(product3));