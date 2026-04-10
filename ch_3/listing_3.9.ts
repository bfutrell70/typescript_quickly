// Listing 3.9 - Correct syntax for method overloading, page 56
class ProductService {
    
    // declares the allowed method signature
    getProducts(): void;
    getProducts(id: number): void;
    
    // implements the method
    getProducts(id?: number): void {
        if(typeof id === 'number') {
            console.log(`Getting the product info for ${id}`);
        } else {
            console.log('Getting all products');
        }
    }
}

const prodService = new ProductService();

prodService.getProducts(123);
prodService.getProducts();