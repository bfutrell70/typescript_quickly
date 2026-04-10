// Listing 3.8 - An erroneous attempt of method overloading, page 55
class ProductService {
    getProducts() {
        console.log('Getting all products');
    }

    getProducts(id: number) {
        console.log(`Getting the product info for ${id}`);
    }
}

const prodService = new ProductService();

prodService.getProducts(123);
prodService.getProducts();