// Listing 3.12 - A single constructor with an optional argument, page 59
interface ProductProperties {
    id?: number,
    description?: string
}

class Product {
    id: number;
    description: string;

    constructor(properties?: ProductProperties) {
        // my code, not in book
        if (typeof properties != null) {
            if (typeof properties?.id === 'number') {
                this.id = properties.id;
            } else {
                this.id = 0;
            }

            if (typeof properties?.description === 'string') {
                this.description = properties.description;
            } else {
                this.description = '';
            }
        } else {
            this.id = 0;
            this.description = '';
        }

    }
}

const product1 = new Product();
const product2 = new Product({ id: 1 });
const product3 = new Product({ id: 1, description: 'great product' });
const product4 = new Product({ description: 'great product' });

console.log(JSON.stringify(product1));
console.log(JSON.stringify(product2));
console.log(JSON.stringify(product3));
console.log(JSON.stringify(product4));